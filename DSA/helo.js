const data = [
    {
        "id": "09e00d2f-0432-4078-8d16-ff6c0589d123",
        "styleType": "confidence",
        "entryFee": 0,
        "gameCount": 2,
        "completedGames": 0,
        "contestantSize": 2,
        "filledSize": 1,
        "visibleMode": "public",
        "multiEntry": 1,
        "contestName": "this is testing",
        "isFeatured": true,
        "invitationToken": "09e00d2f-0432-4078-8d16-ff6c0589d123",
        "startAt": "2023-12-19T14:00:00.000Z",
        "modesId": "702f8707-66ff-4e67-8fc6-bb871443b55d",
        "leaguesId": "be475e32-26a4-4bec-8719-9986040e0807",
        "sportsId": "75c7a82f-8bf8-45ee-8b07-d01c6f811367",
        "contestMatches": [
            {
                "createdAt": "2023-12-11T11:18:24.551Z",
                "updatedAt": "2023-12-11T11:18:24.551Z",
                "deletedAt": null,
                "id": "1358ded2-d658-4a28-ad6a-18775550be5c",
                "contestId": "09e00d2f-0432-4078-8d16-ff6c0589d123",
                "matchId": "0030739c-640c-4230-bf39-b74ff9abf6ae",
                "matches": {
                    "createdAt": "2023-12-08T05:38:51.158Z",
                    "updatedAt": "2023-12-11T06:26:24.351Z",
                    "deletedAt": null,
                    "id": "0030739c-640c-4230-bf39-b74ff9abf6ae",
                    "startAt": "2023-12-19T14:00:00.000Z",
                    "endAt": null,
                    "dataId": "3882324",
                    "dataStaticId": "3375045",
                    "startTime": "14:00",
                    "timer": "0",
                    "localTeamId": "17047",
                    "localTeamName": "istanbul basaksehir",
                    "localTeamPenScore": 0,
                    "localTeamScore": 0,
                    "localTeamEtScore": 0,
                    "localTeamFtScore": 0,
                    "visitorTeamId": "17097",
                    "visitorTeamName": "sivasspor",
                    "visitorTeamPenScore": 0,
                    "visitorTeamScore": 0,
                    "visitorTeamEtScore": 0,
                    "visitorTeamFtScore": 0,
                    "status": "upcoming",
                    "statusText": "14:00",
                    "result": "none",
                    "leagueId": "be475e32-26a4-4bec-8719-9986040e0807"
                }
            },
            {
                "createdAt": "2023-12-11T11:18:24.551Z",
                "updatedAt": "2023-12-11T11:18:24.551Z",
                "deletedAt": null,
                "id": "077cc9c6-5d2f-4bcd-a25e-c13c20344566",
                "contestId": "09e00d2f-0432-4078-8d16-ff6c0589d123",
                "matchId": "042b6de0-be0e-4dca-89e4-e32b18ea3a49",
                "matches": {
                    "createdAt": "2023-12-08T05:38:51.172Z",
                    "updatedAt": "2023-12-11T06:26:24.356Z",
                    "deletedAt": null,
                    "id": "042b6de0-be0e-4dca-89e4-e32b18ea3a49",
                    "startAt": "2023-12-23T10:30:00.000Z",
                    "endAt": null,
                    "dataId": "3882337",
                    "dataStaticId": "3375058",
                    "startTime": "10:30",
                    "timer": "0",
                    "localTeamId": "17097",
                    "localTeamName": "sivasspor",
                    "localTeamPenScore": 0,
                    "localTeamScore": 0,
                    "localTeamEtScore": 0,
                    "localTeamFtScore": 0,
                    "visitorTeamId": "17050",
                    "visitorTeamName": "i̇stanbulspor",
                    "visitorTeamPenScore": 0,
                    "visitorTeamScore": 0,
                    "visitorTeamEtScore": 0,
                    "visitorTeamFtScore": 0,
                    "status": "upcoming",
                    "statusText": "10:30",
                    "result": "none",
                    "leagueId": "be475e32-26a4-4bec-8719-9986040e0807"
                }
            }
        ]
    }
];

let out = {
    "id": "f1a713ae-2f02-474d-b1ec-eb60685c7a70",
    "startAt": "2023-11-22T22:00:00.000Z",
    "contestName": "contest name",
    "isFeatured": false,
    "status": "Open",
    "sportsId": "f1a713ae-2f02-474d-b1ec-eb60685c7a70",
    "modesId": "95a3d705-4f6a-4b24-911d-e1ed3c04577b",
    "styleType": "confidence",
    "visibleMode": "public",
    "leaguesId": "f1a713ae-2f02-474d-b1ec-eb60685c7a70",
    "entryFee": 1,
    "prize": 1,
    "prizeStructureId": "702f8707-66ff-4e67-8fc6-bb871443b55d",
    "invitationToken": "4c28df0c-9040-401c-ad2e-ead2c8886882",
    "gameCount": 20,
    "completedGames": 5,
    "contestantSize": 5,
    "filledSize": 2,
    "multiEntry": 2,
    "matches": [
        {
            "id": "string",
            "startAt": "2023-12-12T05:27:55.201Z",
            "localTeamName": "Leverkusen",
            "localTeamScore": 0,
            "visitorTeamName": "Mainz",
            "visitorTeamScore": 0,
            "status": "upcoming",
            "timer": "string"
        },
        {
            "id": "string",
            "startAt": "2023-12-12T05:27:55.201Z",
            "localTeamName": "Leverkusen",
            "localTeamScore": 0,
            "visitorTeamName": "Mainz",
            "visitorTeamScore": 0,
            "status": "upcoming",
            "timer": "string"
        }
    ]
}

let keysOfOutput = Object.keys(out);
let keysOfMatches = Object.keys(out["matches"][0]);
// console.log(keysOfMatches);

let result = {};
data.forEach(item => {

    for (let i = 0; i < keysOfOutput.length; i++) {
        const value = item[keysOfOutput[i]];

        if (value === undefined) {
            result[keysOfOutput[i]] = out[keysOfOutput[i]];
        } else {
            result[keysOfOutput[i]] = value;
        }
    }

    if (item["contestMatches"]) {
        result["matches"] = [];
        for (let i = 0; i < item["contestMatches"].length; i++) {
            let obj = {};
            for (let j = 0; j < keysOfMatches.length; j++) {
                let matchValue = item["contestMatches"][i]["matches"][keysOfMatches[j]];
                obj[keysOfMatches[j]] = matchValue;
            }
            result["matches"].push(obj);
        }
    }
});

console.log(result);
// console.log(unavailableProp);

