/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class UdentteamContract extends Contract {

    async udentteamExists(ctx, udentteamId) {
        const buffer = await ctx.stub.getState(udentteamId);
        return (!!buffer && buffer.length > 0);
    }

    async createUdentteam(ctx, udentteamId, value) {
        const exists = await this.udentteamExists(ctx, udentteamId);
        if (exists) {
            throw new Error(`The udentteam ${udentteamId} already exists`);
        }
        const asset = { value };
        const buffer = Buffer.from(JSON.stringify(asset));
        await ctx.stub.putState(udentteamId, buffer);
    }

    async readUdentteam(ctx, udentteamId) {
        const exists = await this.udentteamExists(ctx, udentteamId);
        if (!exists) {
            throw new Error(`The udentteam ${udentteamId} does not exist`);
        }
        const buffer = await ctx.stub.getState(udentteamId);
        const asset = JSON.parse(buffer.toString());
        return asset;
    }

    async updateUdentteam(ctx, udentteamId, newValue) {
        const exists = await this.udentteamExists(ctx, udentteamId);
        if (!exists) {
            throw new Error(`The udentteam ${udentteamId} does not exist`);
        }
        const asset = { value: newValue };
        const buffer = Buffer.from(JSON.stringify(asset));
        await ctx.stub.putState(udentteamId, buffer);
    }

    async deleteUdentteam(ctx, udentteamId) {
        const exists = await this.udentteamExists(ctx, udentteamId);
        if (!exists) {
            throw new Error(`The udentteam ${udentteamId} does not exist`);
        }
        await ctx.stub.deleteState(udentteamId);
    }
    async initLedger(ctx) {
        console.info('============= START : Initialize Ledger ===========');
        const patients = [
            {
                patientID: '1099888891',
                dentistID: '2200223333',
                dentalRecordUrl: 'http//:udentexample.com',//justexample
                tmp: '10/11/2019',//METHOD
                hash:'sldkclskdclDNC;@##@VMKDFMV'//METHOD
            }

        ];

        for (let i = 0; i < patients.length; i++) {
            patients[i].docType = 'patient';
            await ctx.stub.putState('PATIENT' + i, Buffer.from(JSON.stringify(patients[i])));
            console.info('Added <--> ', patients[i]);
        }
        console.info('============= END : Initialize Ledger ===========');
    }



    async queryPatient(ctx,PatientID) {
        const patientAsBytes = await ctx.stub.getState(PatientID); // get the patient from chaincode state
        if (!patientAsBytes || patientAsBytes.length === 0) {
            throw new Error(`${PatientID} does not exist`);
        }
        console.log(patientAsBytes.toString());
        return patientAsBytes.toString();
    }



    async createPatient(ctx,PatientID, dentistID, dentalRecordUrl, tmp,hash) {
        console.info('============= START : Create Patient ===========');

        const patient = {
            docType: 'patient',
            patientID: 'blue',
            dentistID: 'Toyota',
            dentalRecordUrl: 'Prius',
            tmp: 'Tomoko',
            hash:'11222'
        };

        await ctx.stub.putState(PatientID, Buffer.from(JSON.stringify(patient)));
        console.info('============= END : Create Patient ===========');
    }



    async querySinglePatient(ctx, key) {
        console.log('Key is ' + key);
        const res = await ctx.stub.getState(key);
        if (res){
            console.log('Result is\n' + JSON.parse(res.toString()));
            let Record;
            try {
                Record = JSON.parse(res.toString('utf8'));
            } catch (err) {
                console.log(err);
                Record = res.toString('utf8');
            }
            return JSON.stringify([{ key, Record }]);
        }
        else{
            console.err('Did not find the patient with PatientNum ' + key);
            return [];
        }
    }
}

module.exports = UdentteamContract;
