const aoijs = require("aoi.js")

//Upt----------------------------UPTIMER----------------------------
const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => console.log(`Bot running on http://localhost:${port}`)); 

//----------------------------MAINS----------------------------

const bot = new aoijs.AoiClient({
    token: "MTA1MTc1NzU1ODM1ODA5Nzk2MQ.GaJD0l.1W0Gii6Tngj2qtkI1dRc8J9x8D7Ub1jHhfh5ds",
    prefix: "-",
    events: ["onMessage", "onMessageDelete", "onJoin", "onLeave", "onInteractionCreate"],
    intents: ["MessageContent", "Guilds", "GuildMessages", "GuildMembers", "GuildPresences", "DirectMessages"]
})

//----------------------------HERO-ENTRY----------------------------
bot.readyCommand({
    channel: "1064239753635057717",
    code: `$log[Ready on $userTag[$clientID]]
💥 Ready on $userTag[$clientID]`
})

//----------------------------EVENTS----------------------------
/*
bot.onMessage({
guildOnly: false
});
bot.onInteractionCreate();
bot.onVoiceStateUpdate();
bot.onLeave();
bot.onJoin();
bot.onMessageDelete();
*/
//----------------------------STATUS----------------------------
bot.status({
  text: "$memberscount[1049979398977241118] members in my DMs (⁠｡⁠•̀⁠ᴗ⁠-⁠)⁠✧",
  type: "LISTENING",
  status: "online",
  time: 12
})

//----------------------------VARIABLES----------------------------
bot.variables({
bio: "",
ig: "",
applied: "false",
bday: "",
name: "",
rep: "0",
totalcash: "0",
cash: "0",
chatXP: "0",
warncount: "0",
attendance: "0",
lastmsgtime: "0",
attendancedate: "0",
serverlog: "0@0@0@0@0@0@0@0@0@0",
sevendaylog: "0@0@0@0@0@0@0@0@0@0@0@0@0@0",
msglog: "",
sunday: "0",
monday: "0",
tuesday: "0",
wednesday: "0",
thursday: "0",
friday: "0",
saturday: "0",
allday: "0"
  })




/*
bot.interactionCommand({
    name: "esewaaftermodal",
    prototype: 'modal',
    code: `
    $interactionReply[Confirm the Form Inputs.;;;;users;yes]

$color[1;ff8888]
$title[1;<:HP_esewa:1055919496868663437> Cashing Out]
$addField[1;**Esewa ID : **\` 98####$cropText[$textInputValue[id];10;6] \`;**Amount You Will Get : **\` $roundTenth[$getUserVar[cash;$findUser[$message;yes]];3] \`]
$footer[1;NOTE : Cash Once Transfered To The Esewa-ID Will Not Be Taken Back, Check The ID You Have Given Properly Before Confirming.]
<@$authorID>
$thumbnail[1;https://cdn.discordapp.com/emojis/1055919496868663437.webp]
$addButton[1;Confirm;success;confirmcashout_$authorID_$textInputValue[id];no;<:HP_esewa:1055919496868663437>]

    `
});
*/

/*
bot.interactionCommand({
    prototype: 'button',
    code: `

    $interactionModal[Cashout NPR $roundTenth[$getUserVar[cash;$findUser[$message;yes]];3];esewaaftermodal;
    {actionRow:
        {textInput:ESewa ID:1:id:yes:9800000000:10:10}
    }
    ]

$onlyIf[$getUserVar[applied;$get[authorID]]==false;{
"content" : "💢 One of your old requests (Cashout or Item Purchase) are still pending approval.",
"ephemeral" : true,
"options" : { "interaction" : true }
}]
    
$onlyIf[$roundTenth[$getUserVar[cash;$findUser[$message;yes]];3]>20;{
"content" : "💢 You can not cashout less than NPR 20!",
"ephemeral" : true,
"options" : { "interaction" : true }
}]

$onlyif[$get[authorID]==$interactionData[author.id];{
"content" : "💢 You aren't the author of this interaction.",
"ephemeral" : true,
"options" : { "interaction" : true }
}]

$onlyIf[$get[customId]==cashout;]

$let[authorID;$splitText[2]]
$let[customId;$splitText[1]] 
$textSplit[$interactionData[customId];_] 

    `
});
*/

/*
bot.interactionCommand({
    prototype: 'button',
    code: `

$interactionReply[✅ Confirmation DM sent and cash deducted.]
$setUserVar[applied;false;$get[authorID]]
$setUserVar[cash;$sub[$getUserVar[cash;$get[authorID]];$get[sum]];$get[authorID]]

$dm[$get[authorID]]
✅ Hey, we have successfully completed your Request and \` NPR $getUserVar[cash;$get[authorID]] \` has been deducted from your balance for **$splitText[4]**. GG

$onlyIf[$get[customId]==moneydeduct;]

$let[sum;$splitText[3]]
$let[authorID;$splitText[2]]
$let[customId;$splitText[1]] 
$textSplit[$interactionData[customId];_] 
    `
});
*/

/*
bot.interactionCommand({
    prototype: 'button',
    code: `

$interactionReply[❌ Declination DM sent.]
$setUserVar[applied;false;$get[authorID]]

$dm[$get[authorID]]
❌ Hey, your Request for **$splitText[4]** for \` NPR $getUserVar[cash;$get[authorID]] \` has been declined. For More Info, contact \` $userTag[$authorID] \`

$onlyIf[$get[customId]==moneydecline;]

$let[sum;$splitText[3]]
$let[authorID;$splitText[2]]
$let[customId;$splitText[1]] 
$textSplit[$interactionData[customId];_] 
    `
});
*/

/*
bot.interactionCommand({
    prototype: 'button',
    code: `
$deleteCommand
$channelSendMessage[$channelID;✅ <@$authorID> • **Cashout Request Sent to the admins.**;no]
$setUserVar[applied;true;$get[authorID]]

$useChannel[1064251267934851072]
$thumbnail[$userAvatar[$authorID]]
$title[1;ESewa Cashout Request.]
$description[**User : **$userTag[$authorID]]
$addField[1;ID : $get[id];**AMOUNT TO SEND : [$roundTenth[$getUserVar[cash;$get[authorID]];3]\](https://discord.com/channels/$guildID/$channelID/$messageID)**]
$image[1;https://api.qrserver.com/v1/create-qr-code/?size=150x150&data={%22eSewa_id%22:%22$get[id]%22,%22name%22:%22$replaceText[$username[$get[authorID]]; ;%20]%22,%22amount%22:%22200%22}]
$color[ff8888]
$addButton[1;Confirm (Click To Deduct Their Cash) • $roundTenth[$getUserVar[cash;$get[authorID]];3];success;moneydeduct_$authorID_$roundTenth[$getUserVar[cash;$get[authorID]];3]_Esewa Cashout;no;]
$addButton[1;Decline;danger;moneydecline_$authorID_$splitText[2]_Esewa Cashout;no;]

$onlyif[$get[authorID]==$interactionData[author.id];{
"content" : "💢 You aren't the author of this interaction.",
"ephemeral" : true,
"options" : { "interaction" : true }
}]

$onlyIf[$get[customId]==confirmcashout;]

$let[id;$splitText[3]]
$let[authorID;$splitText[2]]
$let[customId;$splitText[1]] 
$textSplit[$interactionData[customId];_] 
    `
});
*/


/*
bot.interactionCommand({
    prototype: 'button',
    code: `


$deleteCommand
🛍 <@$authorID> • Server Shop
$color[1;$userRoleColor[1051757558358097961;$guildID]]
$title[1;🏬 Hangout's Shop]

$description[1;💵 **Your Cash : [NPR $roundTenth[$getUserVar[cash;$findUser[$message;yes]];3]\](https://thenamastenepal.com/)**]

$thumbnail[1;$userAvatar[$findUser[$message;yes]]]

$footer[1;Items Once Bought Will Not Be Refunded]

$addSelectMenu[1;buyitems;Buy Items;1;1;no;Nitro:NPR 150 (Real Price $10/Rs 1300):Nitro $10-150-$authorID:no:💎;Nitro Basic:NPR 50 (Real Price $3/Rs 390):Nitro Basic-50-$authorID:no:💎;Nitro 1 Year:NPR 800 (Real Price $100/Rs 13000):Nitro 1 Year-800-$authorID:no:💎;Spotify 1 Year:NPR 100:Spotify-100-$authorID:no:🎶]
$addSelectMenu[2;buyroles;Buy Roles;1;1;no;$roleName[$get[1]]:NPR $get[1p]:$get[1]-$get[1p]-$authorID:no:📁;$roleName[$get[2]]:NPR $get[2p]:$get[2]-$get[2p]-$authorID:no:⭐;$roleName[$get[3]]:NPR $get[3p]:$get[3]-$get[3p]-$authorID:no:🏷]

$let[1;1058334796851466250]
$let[2;1058334966158741564]
$let[3;1058334975088398356]

$let[1p;15]
$let[2p;5]
$let[3p;10]

$onlyif[$get[authorID]==$interactionData[author.id];{
"content" : "💢 You aren't the author of this interaction.",
"ephemeral" : true,
"options" : { "interaction" : true }
}]

$onlyIf[$get[customId]==shop;]

$let[authorID;$splitText[2]]
$let[customId;$splitText[1]] 
$textSplit[$interactionData[customId];_] 

    `
});

*/

/*
bot.interactionCommand({
    prototype: 'button',
    $if: "v4",
    code: `
$deleteCommand

💮 <@$authorID> • **$get[points]** points of yours were redeemed and added to your cash. You can Cashout them or use them in Shop.


$color[1;$userRoleColor[$findUser[$message;yes];$guildID]]
$author[1;$userTag[$findUser[$message;yes]] $replaceText[($nickname[$findUser[$message;yes]]);();];$guildIcon[$guildID]]
$image[1;http://img.ghosty.bot/1000x20/$replaceText[$userRoleColor[$findUser[$message;yes];$guildID];#;]/000000/?font=bebas&retina=&text=-----------------------------------------------------------------------------------------+$uri[$username[$findUser[$message;yes]]]+-----------------------------------------------------------------------------------------&font_size=25]
$image[1;https://singlecolorimage.com/get/$replaceText[$userRoleColor[$findUser[$message;yes];$guildID];#;]/1000x8]

$addField[1;**Created** <t:$round[$divide[$creationDate[$findUser[$message;yes];ms];1000]]:R> • **Joined** <t:$round[$divide[$memberJoinedDate[$findUser[$message;yes];$guildID;ms];1000]]:R>;\` \` 🏵 **Hangout Points : [$getUserVar[bounty;$findUser[$message;yes]] HPs\](https://thenamastenepal.com/) **$replaceText[$replaceText[$checkContains[$day;friday;saturday];true;:small_orange_diamond: +10% Weekend];false;$replaceText[$replaceText[$hasRoles[$guildID;$findUser[$message;yes];1050690197668511794];true;:small_orange_diamond: +10% Booster];false;]]
\` \` 💵 **Cash : [NPR $roundTenth[$getUserVar[cash;$findUser[$message;yes]];3]\](https://thenamastenepal.com/)**]

$title[1;**$getUserVar[name;$findUser[$message;yes]]**, $replaceText[$replaceText[$hasRoles[$guildID;$findUser[$message;yes];1051339817532788786];true;♂️] $replaceText[$hasRoles[$guildID;$findUser[$message;yes];1051339857462579312];true;♀️]$replaceText[$hasRoles[$guildID;$findUser[$message;yes];1051339926374985788];true;⚧️];false;] **$sub[$year;$cropText[$getUserVar[bday;$findUser[$message;yes]];4;0]]** \`(🎂 $cropText[$getUserVar[bday;$findUser[$message;yes]];10;5])\`]
$replaceText[$replaceText[$hasRoles[$guildID;$authorID;1057935756334735371];true;⛔ **Your HP Farm Has Been Blocked!**];false;]
$description[1;>>> $getUserVar[bio;$findUser[$message;yes]]** **]

$thumbnail[1;$userAvatar[$findUser[$message;yes]]]

$footer[1;🔥 $getUserVar[attendance;$findUser[$message;yes]] day(s) streak • ⭐ $getUserVar[chatXP;$findUser[$message;yes]] chatXPs • 🎙 $round[$divide[$getUserVar[vcXP;$findUser[$message;yes]];60]] min vcXPs • 💮 $getUserVar[rep;$findUser[$message;yes]] Reps]

$addButton[1;;secondary;editinfo_none_$authorID;no;✏]
$addButton[1;Cashout;success;cashout_$authorID;no;]
$addButton[1;Shop;danger;shop_$authorID;no;]
$addButton[1;Redeem Points;primary;redeempointstocash_$authorID;no;]

    $setUserVar[bounty;0;$authorID]
    $setUserVar[cash;$sum[$getUserVar[cash;$authorID];$divide[$getUserVar[bounty;$authorID];1500]];$authorID]

    $let[points;$getUserVar[bounty;$authorID]]

$onlyif[$get[authorID]==$interactionData[author.id];{
"content" : "💢 You aren't the author of this interaction.",
"ephemeral" : true,
"options" : { "interaction" : true }
}]

$onlyIf[$get[customId]==redeempointstocash;]

$let[authorID;$splitText[2]]
$let[customId;$splitText[1]] 
$textSplit[$interactionData[customId];_] 

    `
});


bot.command({
name: "profileold",
$if: "v4",
code: `

$if[$getUserVar[name;$authorID]!=]
$color[1;$userRoleColor[1051757558358097961;$guildID]]
$title[1;$userTag[$findUser[$message;yes]]'s Profile]
$replaceText[$replaceText[$hasRoles[$guildID;$authorID;1057935756334735371];true;⛔ **Your HP Farm Has Been Blocked!**];false;]
$addField[1;🔥 **$getUserVar[attendance;$findUser[$message;yes]]** day(s) streak • ⭐ **$getUserVar[chatXP;$findUser[$message;yes]]** chatXPs • 🎙 **$round[$divide[$getUserVar[vcXP;$findUser[$message;yes]];60]]** min vcXPs • 💮 **$getUserVar[rep;$findUser[$message;yes]]** Reps;
>>> 🏵 **Hangout Points : [$getUserVar[bounty;$findUser[$message;yes]] HPs\](https://thenamastenepal.com/) **[$replaceText[$replaceText[$checkContains[$day;friday;saturday];true;:small_orange_diamond: +10% Weekend];false;$replaceText[$replaceText[$hasRoles[$guildID;$findUser[$message;yes];1050690197668511794];true;:small_orange_diamond: +10% Booster];false;No Boosts]]\]
💵 **Cash : [NPR $roundTenth[$getUserVar[cash;$findUser[$message;yes]];3]\](https://thenamastenepal.com/)** [Rate : NPR 1/2K HPs\]]

$addField[1;**$getUserVar[name;$findUser[$message;yes]]** $if[$hasRoles[$guildID;$findUser[$message;yes];1051339817532788786]==true]♂️ $endif$if[$hasRoles[$guildID;$findUser[$message;yes];1051339857462579312]==true]♀️ $endif$if[$hasRoles[$guildID;$findUser[$message;yes];1051339926374985788]==true]⚧️ $endif [🎂 **Bday :** \` $cropText[$getUserVar[bday;$findUser[$message;yes]];10;5] \` \];
**Account Created** <t:$round[$divide[$creationDate[$findUser[$message;yes];ms];1000]]:R> (<t:$round[$divide[$creationDate[$findUser[$message;yes];ms];1000]]:d>)
**Joined Hangouts** <t:$round[$divide[$memberJoinedDate[$findUser[$message;yes];$guildID;ms];1000]]:R> (<t:$round[$divide[$memberJoinedDate[$findUser[$message;yes];$guildID;ms];1000]]:d>);no]
$thumbnail[1;$userAvatar[$findUser[$message;yes]]]

$footer[1;You can earn cash by redeeming the Hangout Points (HPs). Which can be either cashed out through ESewa or used in the shop to purchase items. HPs are earned by chatting and through events.]

$if[$authorID==$findUser[$message;yes]]
$addButton[1;Cashout;success;cashout_$authorID;no;<:HP_esewa:1055919496868663437>]
$addButton[1;Shop;danger;shop_$authorID;no;🛒]
$addButton[1;Redeem Points;primary;redeempointstocash_$authorID;no;💳]
$endif

$else

$color[1;$userRoleColor[1051757558358097961;$guildID]]
$title[1;Welcome To Hangout Place]

$description[1;[Wssap **$username[$authorID]**, wha~ they said you could earn cash by just texting?\](https://discord.com/channels/1049979398977241118/1049979400101298267/1058346617620676670)
> Yes, they didnt lie [See Terms & Policies 0\], lemme guide you through how it works. Ah but~ thats boring, and ik you dont have time. In short, we reward you **10 to 20** hangout Points for messages every minute in this server which through \` -profile \` you can use to buy roles, items or __simply cashout in <:HP_esewa:1055919496868663437> ESewa__. Details at \` -help \`]

$addField[1;**Terms And Policies**;
\` 0 \` These Activity Reward are not a strategy for us to increase engagement. You can engage in this server as much as you like as a normal discord user. We just decided to reward members with small gifts for their presence. This is nothing different than the other activity reward and role systems other than having an ability to also get real cash instead of just roles and levels.
\` 1 \` Your Balance, Warns and all metrics are public to anybody that runs this command.
\` 2 \` Esewa cash/Items once bought will not be refunded.
\` 3 \` By entring DOB (which is optional) you opt in for yearly automated Birthday wish ping in this server.
\` 4 \` You may get terminated from earning HPs if found abusing this to farm cash or not making an effort into the actual conversation.]

$footer[1;Did you read it? Then lets know a bit about you. Whats your prefered gender Pronoun? (Click the buttons to answer)]

$addButton[1;They/Them;primary;sex_1051339926374985788_$authorID;no;]
$addButton[1;He/Him;success;sex_1051339817532788786_$authorID;no;]
$addButton[1;She/Her;danger;sex_1051339857462579312_$authorID;no;]

$endif


$let[nametrend;quarantined]
$let[totalboost;9]
$botTyping
$reply[$messageID;yes]
$onlyIf[$guildID!=;]
    `
}) //profile

*/
/*
bot.command({
name: "nick",
code: `

$setUserVar[cash;$sub[$getUserVar[cash;$authorID];5];$authorID]

$reply
🎫 • Your nickname successfully changed to \` $message \`. (💰 Cash -5)
$changeNickname[$authorID;$message;$username changed their own nickname.]


$onlyIf[$getUserVar[cash;$authorID]>=5;❗ <@$authorID> • You need 💰 **NPR 5** to change your nickname! Do \` -profile \` to update your wallet and convert your hangout points into useable cash.]
$onlyForChannels[1064239411140771944;1064238946638364723;1064254127984611368;❗ <@$authorID> • You can only run these commands in <#1064239411140771944>.]
$suppressErrors[❗ <@$authorID> • **Something went wrong!** Couldnt change your nickname!]
`
})
*/

bot.command({
    name: "openshop",
	$if: "old",
    code: `

    $color[1;$userRoleColor[1051757558358097961;$guildID]]

    $author[1;Activity Rewards]
    $title[1;🏬 Chat and earn rewards]
    $description[1;You get __**10 to 20**__ 🪙 Hangout Coins (HCs) for a message sent every minute. (⚡ +10%  for boosters & ⚡ +25% on Weekends) which you can use to buy roles, nitros, spotify in the menu below or change your nickname in this server.]
    $image[1;https://singlecolorimage.com/get/$replaceText[$userRoleColor[1051757558358097961;$guildID];#;]/1000x4]

$color[3;$userRoleColor[1051757558358097961;$guildID]]
$author[3;Roles & Server Shop]
$addField[3;🎟 • Change Nickname;→ **[5000 HCs](https://thenamastenepal.com/)** (One time);true]
$addField[3;🍎 • Add Reaction Perm;→ **[20,000 HCs](https://thenamastenepal.com/)** (Permanent);true]
$addField[3;🔗 • Embed & Image Perm;→ **[30,000 HCs](https://thenamastenepal.com/)** (Permanent);true]
$image[3;https://singlecolorimage.com/get/$replaceText[$userRoleColor[1051757558358097961;$guildID];#;]/1000x4]

$image[2;https://singlecolorimage.com/get/$replaceText[$userRoleColor[1051757558358097961;$guildID];#;]/1000x4]
$color[2;$userRoleColor[1051757558358097961;$guildID]]
$author[2;Gifts & Items Shop]
$addField[2;<:TNN_spotify:1100495367595896942> • Spotify 1 Year;→ **[120,000 HCs](https://thenamastenepal.com/)**;true]
$addField[2;<:TNP_nitroBasic:1100495465537081374> • Nitro Basic;→ **[80,000 HCs](https://thenamastenepal.com/)**;true]
$addField[2;<a:TNN_nitro:1100495647062364241> • Nitro 1 Year;→ **[1,000,000 HCs](https://thenamastenepal.com/)**;true]
$addField[2;<a:TNN_nitro:1100495647062364241> • Nitro 2 Boost;→ **[200,000 HCs](https://thenamastenepal.com/)**;true]
    
$footer[2;Items Once Bought Will Not Be Refunded]

    $addSelectMenu[1;buyitems;Browse Available Items;1;1;no;Nitro $10:200,000 HCs:Nitro $10-200000-$authorID:no:💎;Nitro Basic:80,000 HCs:Nitro Basic-80000-$authorID:no:💎;Nitro 1 Year:1,000,000 HCs:Nitro 1 Year-1000000-$authorID:no:💎;Spotify 1 Year:120,000 HCs:Spotify-120000-$authorID:no:🎶]
    $addSelectMenu[2;buyroles;Browse Available Roles;1;1;no;$roleName[$get[1]]:$get[1p] HCs:$get[1]-$get[1p]-$authorID:no:📁;$roleName[$get[2]]:$get[2p] HCs:$get[2]-$get[2p]-$authorID:no:⭐]


        $addButton[3;Change Nickname • 5000 HCs;secondary;changenickname;no;✏]

    $let[1;1058334796851466250]
    $let[2;1058334966158741564]

    $let[1p;30000]
    $let[2p;20000]


    $onlyIf[$authorID==754033245972201612;]
        `
    }) //shop

bot.interactionCommand({
    name: "buyitems",
    prototype: 'selectMenu',
    $if: "old",
    code: `


$if[$getUserVar[cash;$authorID]>=5000]
    
   $interactionReply[🎟 **Item purchase is only available through tickets!** Create a ticket from <#1064830344026652682> and run \` -profile \` to check your balance and ask the giftcode "$splitText[1]". You will be charged by the admins only after the successful purchase.;;;;everyone;true]

$else

    $interactionReply[💢 You dont have enough cash! It costs \` $splitText[2] HCs \` and you only have \` $getUserVar[cash;$authorID] HCs \`;;;;everyone;true]

$endif

$textSplit[$interactionData[values[0]];-]
    `
});


bot.interactionCommand({
    name: "buyroles",
    prototype: 'selectMenu',
    $if: "old",
    code: `

$if[$getUserVar[cash;$authorID]>=5000]
    $interactionReply[✅ You successfully bought the role **$roleName[$splitText[1]]** and was charged \` $splitText[2] HCs \`;;;;everyone;true]


    $setUserVar[cash;$sub[$getUserVar[cash;$authorID];$splitText[2]];$authorID]
    $giveRole[$guildID;$authorID;$splitText[1]]
    
    
$else

    $interactionReply[💢 You dont have enough cash! It costs \` $splitText[2] HCs \` and you only have \` $getUserVar[cash;$authorID] HCs \`;;;;everyone;true]

$endif

$textSplit[$interactionData[values[0]];-]
    `
});

bot.interactionCommand({
    name: "changenickname",
    prototype: 'button',
    $if: "old",
    code: `

$if[$getUserVar[cash;$authorID]>=5000]
    $interactionModal[Change Nickname;postchangenickname;
        {actionRow:
            {textInput:Enter New Name:1:name:yes:Enter New Name.:0:20}
        }
        ]
$else

    $interactionReply[💢 You dont have enough cash! It costs \` 5,000 HCs \` and you only have \` $getUserVar[cash;$authorID] HCs \`;;;;everyone;true]

$endif

    `
});

bot.interactionCommand({
    name: "postchangenickname",
    prototype: 'modal',
    code: `
    
$setUserVar[cash;$sub[$getUserVar[cash;$authorID];5000];$authorID]
    $interactionReply[🎫 • Your nickname successfully changed to \` $textInputValue[name] \`.;;;;users;true]

$changeNickname[$authorID;$textInputValue[name];$username changed their own nickname.]



    `
});





bot.command({
    name: "profile",
	$if: "old",
    code: `
    

    $color[1;$userRoleColor[$findUser[$message;true];$guildID]]
    $author[1;$userTag[$findUser[$message;true]] $replaceText[($nickname[$findUser[$message;true]]);();];$guildIcon[$guildID]]
    
    $addField[1;**Created** <t:$round[$divide[$creationDate[$findUser[$message;true];ms];1000]]:R> • **Joined** <t:$round[$divide[$memberJoinedDate[$findUser[$message;true];$guildID;ms];1000]]:R>;\` \` 💵 **Hangout Coins : [$getUserVar[cash;$findUser[$message;true]] HCs\](https://jharajat.com.np/p/?nepal)** $replaceText[$replaceText[$checkContains[$day;friday;saturday];true;:small_orange_diamond: +25% Weekend];false;$replaceText[$replaceText[$hasRoles[$guildID;$findUser[$message;true];1050690197668511794];true;:small_orange_diamond: +10% Booster];false;]]
]
    
    $if[$getUserVar[name;$findUser[$message;true]]!=]
        $title[1;**$getUserVar[name;$findUser[$message;true]]**, $replaceText[$replaceText[$hasRoles[$guildID;$findUser[$message;true];1051339817532788786];true;♂️] $replaceText[$hasRoles[$guildID;$findUser[$message;true];1051339857462579312];true;♀️]$replaceText[$hasRoles[$guildID;$findUser[$message;true];1051339926374985788];true;⚧️];false;] **$sub[$year;$cropText[$getUserVar[bday;$findUser[$message;true]];4;0]]** \`(🎂 $cropText[$getUserVar[bday;$findUser[$message;true]];10;5])\`]
        $replaceText[$replaceText[$hasRoles[$guildID;$authorID;1057935756334735371];true;⛔ **Your HP Farm Has Been Blocked!**];false;]
        $description[1;>>> $getUserVar[bio;$findUser[$message;true]]** **]
    $endif
    
    $thumbnail[1;$userAvatar[$findUser[$message;true]]]
    
    $footer[1;🔥 $getUserVar[attendance;$findUser[$message;true]] days streak • ⭐ $getUserVar[chatXP;$findUser[$message;true]] chatXPs • ⭐ $getUserVar[allday;$findUser[$message;true]] Msg this week 💮 • $getUserVar[rep;$findUser[$message;true]] Reps]
    
    $if[$authorID==$findUser[$message;true]]
        $addButton[1;Edit;secondary;editinfo_none_$authorID;no;✏]
    $endif

    $if[$getUserVar[ig;$findUser[$message;true]]!=]
        $addButton[1;Instagram;link;https://instagram.com/$getUserVar[ig;$findUser[$message;true]];no]
    $endif

    $addButton[1;7 Days Activity;link;https://thenamastenepal.com/sevendays.html?data=$get[data]&name=$uri[$userTag[$get[authorID]];encode]&color=$get[color];no;📊]
    
    $if[$day==saturday]
        $let[data;$get[sun]%2C$get[mon]%2C$get[tue]%2C$get[wed]%2C$get[thu]%2C$get[fri]%2C$get[sat]]
    $else
    $if[$day==sunday]
        $let[data;$get[mon]%2C$get[tue]%2C$get[wed]%2C$get[thu]%2C$get[fri]%2C$get[sat]%2C$get[sun]]
    $else
    $if[$day==monday]
        $let[data;$get[tue]%2C$get[wed]%2C$get[thu]%2C$get[fri]%2C$get[sat]%2C$get[sun]%2C$get[mon]]
    $else
    $if[$day==tuesday]
        $let[data;$get[wed]%2C$get[thu]%2C$get[fri]%2C$get[sat]%2C$get[sun]%2C$get[mon]%2C$get[tue]]
    $else
    $if[$day==wednesday]
        $let[data;$get[thu]%2C$get[fri]%2C$get[sat]%2C$get[sun]%2C$get[mon]%2C$get[tue]%2C$get[wed]]
    $else
    $if[$day==thursday]
        $let[data;$get[fri]%2C$get[sat]%2C$get[sun]%2C$get[mon]%2C$get[tue]%2C$get[wed]%2C$get[thu]]
    $else
    $if[$day==friday]
        $let[data;$get[sat]%2C$get[sun]%2C$get[mon]%2C$get[tue]%2C$get[wed]%2C$get[thu]%2C$get[fri]]
    $endif
    $endif
    $endif
    $endif
    $endif
    $endif
    $endif


    $let[color;$replaceText[$userRoleColor[$get[authorID];$guildID];#;%23]]
    $let[sun;$getUserVar[sunday;$get[authorID]]]
    $let[mon;$getUserVar[monday;$get[authorID]]]
    $let[tue;$getUserVar[tuesday;$get[authorID]]]
    $let[wed;$getUserVar[wednesday;$get[authorID]]]
    $let[thu;$getUserVar[thursday;$get[authorID]]]
    $let[fri;$getUserVar[friday;$get[authorID]]]
    $let[sat;$getUserVar[saturday;$get[authorID]]]
    $let[authorID;$findUser[$message;true]]


    $botTyping
    $reply[$messageID;yes]
    $onlyIf[$guildID!=;]
        `
    }) 
    
    bot.interactionCommand({
        prototype: 'button',
        code: `
    
        $interactionModal[About Me;profileedit;
        {actionRow:
            {textInput:What's Your Name?:1:name:yes::0:30:$getUserVar[name;$authorID]}
        }
        {actionRow:
            {textInput:What's your DOB? (In AD):1:id:yes:YYYY-MM-DD (English Date):0:10:$getUserVar[bday;$authorID]}
        }
        {actionRow:
            {textInput:Bio (For Your Profile):2:bio:no::0:190:$getUserVar[bio;$authorID]}
        }
        {actionRow:
            {textInput:Instagram ID:1:btnurl:no:Not LINK ❗❗ Just ID without "@" (Optional):0:20:$getUserVar[ig;$authorID]}
        }
        ]
    
    
    $onlyif[$get[authorID]==$interactionData[author.id];{
    "content" : "💢 You aren't the author of this interaction.",
    "ephemeral" : true,
    "options" : { "interaction" : true }
    }]
    
    $onlyIf[$get[customId]==editinfo;]
    
    $let[authorID;$splitText[3]]
    $let[customId;$splitText[1]] 
    $textSplit[$interactionData[customId];_] 
    
        `
    });
    
    
bot.interactionCommand({
    name: "profileedit",
    prototype: 'modal',
    code: `
    $interactionReply[<@$authorID> 💥 Awesome **$textInputValue[name]**, works done, run \` -profile \` to continue.;;;;users;no]


$setUserVar[bio;$textInputValue[bio]]
$setUserVar[bday;$replaceText[$textInputValue[id];/;-]]
$setUserVar[name;$textInputValue[name]]
$setUserVar[ig;$textInputValue[btnurl]]

$onlyIf[$splitText[2]<=12;<@$authorID> ⚠ Month in \` YYYY-MM-DD \` must be from 1 to 12, \` $textInputValue[id] \` didnt match that.]
$onlyIf[$splitText[2]>=1;<@$authorID> ⚠ Month in \` YYYY-MM-DD \` must be from 1 to 12, \` $textInputValue[id] \` didnt match that.]

$onlyIf[$splitText[3]<=31;<@$authorID> ⚠ Day in \` YYYY-MM-DD \` must be from 1 to 31, \` $textInputValue[id] \` didnt match that.]
$onlyIf[$splitText[3]>=1;<@$authorID> ⚠ Day in \` YYYY-MM-DD \` must be from 1 to 31, \` $textInputValue[id] \` didnt match that.]

$onlyIf[$isNumber[$splitText[1]]==true;<@$authorID> ⚠ Year, Month and Days in \` YYYY-MM-DD \` must be a number, \` $textInputValue[id] \` didnt match that.]
$onlyIf[$isNumber[$splitText[3]]==true;<@$authorID> ⚠ Year, Month and Days in \` YYYY-MM-DD \` must be a number, \` $textInputValue[id] \` didnt match that.]
$onlyIf[$isNumber[$splitText[2]]==true;<@$authorID> ⚠ Year, Month and Days in \` YYYY-MM-DD \` must be a number, \` $textInputValue[id] \` didnt match that.]

$onlyIf[$charCount[$splitText[3]]==2;<@$authorID> ⚠ The correct format for DOB is \` YYYY-MM-DD \`, \` $textInputValue[id] \` didnt match that.]
$onlyIf[$charCount[$splitText[2]]==2;<@$authorID> ⚠ The correct format for DOB is \` YYYY-MM-DD \`, \` $textInputValue[id] \` didnt match that.]
$onlyIf[$charCount[$splitText[1]]==4;<@$authorID> ⚠ The correct format for DOB is \` YYYY-MM-DD \`, \` $textInputValue[id] \` didnt match that.]


$textSplit[$replaceText[$textInputValue[id];/;-];-]
    `
});
//profile



bot.interactionCommand({
    prototype: 'button',
    $if: "old",
    code: `
    $interactionReply[;{newEmbed:{author:Last 7 days Message Graph:$userAvatar[$get[authorID]]}{image:$get[img]}{color:$userRoleColor[$get[authorID];$guildID]}};;;everyone;true]

    $let[img2;https://quickchart.io/chart?c=%7B%0A%20%20%22type%22%3A%20%22bar%22%2C%0A%20%20%22data%22%3A%20%7B%0A%20%20%20%20%22labels%22%3A%20%5B%0A%20%20%20%20%20%20%22Sun%22%2C%0A%20%20%20%20%20%20%22Mon%22%2C%0A%20%20%20%20%20%20%22Tue%22%2C%0A%20%20%20%20%20%20%22Wed%22%2C%0A%20%20%20%20%20%20%22Thu%22%2C%0A%20%20%20%20%20%20%22Fri%22%2C%0A%20%20%20%20%20%20%22Sat%22%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22datasets%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22label%22%3A%20%22Messages%22%2C%0A%20%20%20%20%20%20%20%20%22backgroundColor%22%3A%20%22$get[color]50%22%2C%0A%20%20%20%20%20%20%20%20%22borderColor%22%3A%20%22$get[color]%22%2C%0A%20%20%20%20%20%20%20%20%22borderWidth%22%3A%202%2C%0A%20%20%20%20%20%20%20%20%22data%22%3A%20%5B$get[sun]%2C$get[mon]%2C$get[tue]%2C$get[wed]%2C$get[thu]%2C$get[fri]%2C$get[sat]%5D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%5D%0A%20%20%7D%2C%0A%20%20%22options%22%3A%20%7B%0A%20%20%20%20%22responsive%22%3A%20true%2C%0A%20%20%20%20%22legend%22%3A%20%7B%0A%20%20%20%20%20%20%22position%22%3A%20%22top%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22title%22%3A%20%7B%0A%20%20%20%20%20%20%22display%22%3A%20true%2C%0A%20%20%20%20%20%20%22text%22%3A%20%221%20Week%20Message%20Cunts%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22plugins%22%3A%20%7B%0A%20%20%20%20%20%20%22roundedBars%22%3A%20true%20%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D]
    
    $let[img;$replaceText[https://quickchart.io/chart?bkg=%23fffefe&c=%7B%22type%22%3A%22bar%22%2C%22data%22%3A%7B%22labels%22%3A%5B%22Sun%22%2C%22Mon%22%2C%22Tue%22%2C%22Wed%22%2C%22Thu%22%2C%22Fri%22%2C%22Sat%22%5D%2C%22datasets%22%3A%5B%7B%22label%22%3A%22$get[lable]%22%2C%22backgroundColor%22%3A%22$get[color]50%22%2C%22borderColor%22%3A%22$get[color]%22%2C%22borderWidth%22%3A2%2C%22data%22%3A%5B$get[sun]%2C$get[mon]%2C$get[tue]%2C$get[wed]%2C$get[thu]%2C$get[fri]%2C$get[sat]%5D%2C%22datalabels%22%3A%7B%22align%22%3A%22center%22%2C%22anchor%22%3A%22center%22%7D%7D%5D%7D%2C%22options%22%3A%7B%22responsive%22%3Atrue%2C%22legend%22%3A%7B%22position%22%3A%22top%22%7D%2C%22title%22%3A%7B%22display%22%3Atrue%2C%22text%22%3A%221%20Week%20Message%20Cunts%22%7D%2C%22plugins%22%3A%7B%22roundedBars%22%3Atrue%2C%22datalabels%22%3A%7B%22color%22%3A%22%23000000%22%7D%7D%7D%7D;$day;Today%20✨]


    
    $let[lable;Messages]
    
    $let[color;$replaceText[$userRoleColor[$get[authorID];$guildID];#;%23]]


    $let[sun;$getUserVar[sunday;$get[authorID]]]
    $let[mon;$getUserVar[monday;$get[authorID]]]
    $let[tue;$getUserVar[tuesday;$get[authorID]]]
    $let[wed;$getUserVar[wednesday;$get[authorID]]]
    $let[thu;$getUserVar[thursday;$get[authorID]]]
    $let[fri;$getUserVar[friday;$get[authorID]]]
    $let[sat;$getUserVar[saturday;$get[authorID]]]


    $onlyIf[$get[customId]==graph;]
    
    $let[authorID;$splitText[2]]
    $let[customId;$splitText[1]] 
    $textSplit[$interactionData[customId];_] 
    `
    }) //cash


/*
bot.command({
name: "profileexp",
code: `

$if[$getUserVar[name;$authorID]!=;
$color[1;$userRoleColor[$findUser[$message;yes];$guildID]]
$author[1;$userTag[$findUser[$message;yes]] $replaceText[($nickname[$findUser[$message;yes]]);();];$guildIcon[$guildID]]
$image[1;http://img.ghosty.bot/1000x20/$replaceText[$userRoleColor[$findUser[$message;yes];$guildID];#;]/000000/?font=bebas&retina=&text=-----------------------------------------------------------------------------------------+$uri[$username[$findUser[$message;yes]]]+-----------------------------------------------------------------------------------------&font_size=25]
$image[1;https://singlecolorimage.com/get/$replaceText[$userRoleColor[$findUser[$message;yes];$guildID];#;]/1000x8]

$addField[1;**Created** <t:$round[$divide[$creationDate[$findUser[$message;yes];ms];1000]]:R> • **Joined** <t:$round[$divide[$memberJoinedDate[$findUser[$message;yes];$guildID;ms];1000]]:R>;\` \` 💵 **Cash : [NPR $roundTenth[$getUserVar[cash;$findUser[$message;yes]];3]\](https://jharajat.com.np/p/?nepal)**]

$if[$getUserVar[name;$findUser[$message;yes]]!=;
$title[1;**$getUserVar[name;$findUser[$message;yes]]**, $replaceText[$replaceText[$hasRoles[$guildID;$findUser[$message;yes];1051339817532788786];true;♂️] $replaceText[$hasRoles[$guildID;$findUser[$message;yes];1051339857462579312];true;♀️]$replaceText[$hasRoles[$guildID;$findUser[$message;yes];1051339926374985788];true;⚧️];false;] **$sub[$year;$cropText[$getUserVar[bday;$findUser[$message;yes]];4;0]]** \`(🎂 $cropText[$getUserVar[bday;$findUser[$message;yes]];10;5])\`]
$replaceText[$replaceText[$hasRoles[$guildID;$authorID;1057935756334735371];true;⛔ **Your HP Farm Has Been Blocked!**];false;]
$description[1;>>> $getUserVar[bio;$findUser[$message;yes]]** **]
]

$thumbnail[1;$userAvatar[$findUser[$message;yes]]]

$footer[1;🔥 $getUserVar[attendance;$findUser[$message;yes]] day(s) streak • ⭐ $getUserVar[chatXP;$findUser[$message;yes]] chatXPs • 💮 $getUserVar[rep;$findUser[$message;yes]] Reps]

$if[$authorID==$findUser[$message;yes];
$addButton[1;;secondary;editinfo_none_$authorID;no;✏]
$addButton[1;Cashout;success;cashout_$authorID;no;]
$addButton[1;Shop;danger;shop_$authorID;no;]
$addButton[1;Redeem Points;primary;redeempointstocash_$authorID;no;]
]

;

$color[1;$userRoleColor[1051757558358097961;$guildID]]
$title[1;Welcome To Hangout Place]

$description[1;[Wssap **$username[$authorID]**, wha~ they said you could earn cash by just texting?\](https://discord.com/channels/1049979398977241118/1049979400101298267/1058346617620676670)
> Yes, they didnt lie [See Terms & Policies 0\], lemme guide you through how it works. Ah but~ thats boring, and ik you dont have time. In short, we reward you **10 to 20** hangout Points for messages every minute in this server which through \` -profile \` you can use to buy roles, items or __simply cashout in <:HP_esewa:1055919496868663437> ESewa__. Details at \` -help \`]

$addField[1;**Terms And Policies**;
\` 0 \` These Activity Reward are not a strategy for us to increase engagement. You can engage in this server as much as you like as a normal discord user. We just decided to reward members with small gifts for their presence. This is nothing different than the other activity reward and role systems other than having an ability to also get real cash instead of just roles and levels.
\` 1 \` Your Balance, Warns and all metrics are public to anybody that runs this command.
\` 2 \` Esewa cash/Items once bought will not be refunded.
\` 3 \` By entring DOB (which is optional) you opt in for yearly automated Birthday wish ping in this server.
\` 4 \` You may get terminated from earning HPs if found abusing this to farm cash or not making an effort into the actual conversation.]

$footer[1;Did you read it? Then lets know a bit about you. Whats your prefered gender Pronoun? (Click the buttons to answer)]

$addButton[1;They/Them;primary;sex_1051339926374985788_$authorID;no;]
$addButton[1;He/Him;success;sex_1051339817532788786_$authorID;no;]
$addButton[1;She/Her;danger;sex_1051339857462579312_$authorID;no;]

]


$let[nametrend;quarantined]
$let[totalboost;9]
$botTyping
$reply[$messageID;yes]
$onlyIf[$guildID!=;]
    `
}) //profile
*/

/*
bot.interactionCommand({
    prototype: 'button',
    code: `


$giveRole[$guildID;$authorID;$splitText[2]]
$wait[3s]
$takeRoles[$guildID;$authorID;1051339857462579312;1051339817532788786;1051339926374985788]

    $interactionModal[About Me;profileedit;
    {actionRow:
        {textInput:What's Your Name?:1:name:yes::1:30}
    }
    {actionRow:
        {textInput:What's your DOB? (In AD):1:id:yes:YYYY-MM-DD (English Date):10:10}
    }
    {actionRow:
        {textInput:Bio (For Your Profile):2:bio:no::0:100}
    }
	{actionRow:
        {textInput:Instagram ID:1:btnurl:no:Not LINK ❗❗ Just ID without "@" (Optional):0:25:$getUserVar[ig;$authorID]}
    }
    ]


$onlyif[$get[authorID]==$interactionData[author.id];{
"content" : "💢 You aren't the author of this interaction.",
"ephemeral" : true,
"options" : { "interaction" : true }
}]

$onlyIf[$get[customId]==sex;]

$let[authorID;$splitText[3]]
$let[customId;$splitText[1]] 
$textSplit[$interactionData[customId];_] 

    `
});

*/

/*
//chatbot ======================================================
bot.command({
name: "$alwaysExecute",
code: `
$reply
$httpRequest[http://api.brainshop.ai/get?bid=161863&key=emrrTPwQNCjdoCfK&uid=$authorID&msg=$replaceText[$uri[$message;encode]; ;+;-1];GET;;cnt]

$if[$referenceMessageID!=;
$onlyIf[$getMessage[$channelID;$referenceMessageID;userID]==1051757558358097961;]
;
]
$onlyIf[$channelID==1064563493002543174;]
`
})
*/

//streak ======================================================
bot.command({
name: "$alwaysExecute",
$if: "old",
code: `

$if[$getUserVar[attendancedate;$authorID]>=$dateStamp]
$setUserVar[attendance;$sum[$getUserVar[attendance;$authorID];1];$authorID]
$channelSendMessage[1064239753635057717;$username#$discriminator[$authorID] **|** Streak : $sum[$getUserVar[attendance;$authorID];1]. 🔥 Next Date : <t:$cropText[$get[nextday];10]>]

    $setGuildVar[serverlog;$splitText[1]@$splitText[2]@$splitText[3]@$splitText[4]@$splitText[5]@$sum[$splitText[6];1]@$splitText[7]@$splitText[8]@$splitText[9]@$splitText[10];$guildID]
    $textSplit[$getGuildVar[serverlog;$guildID];@]

$else
$setUserVar[attendance;1;$authorID]
$channelSendMessage[1064239753635057717;$username#$discriminator[$authorID] **|** Streak : 1 Old : $getUserVar[attendance;$authorID]. :red_circle: Next Date : <t:$cropText[$get[nextday];10]>]

    $setGuildVar[serverlog;$splitText[1]@$splitText[2]@$splitText[3]@$splitText[4]@$splitText[5]@$splitText[6]@$sum[$splitText[7];1]@$splitText[8]@$splitText[9]@$splitText[10];$guildID]
    $textSplit[$getGuildVar[serverlog;$guildID];@]

$reply
$endif


$setUserVar[attendancedate;$sum[$get[nextday];86400000];$authorID]

$let[nextday;$sum[$dateStamp;86400000;-$multi[$hour;3600000];-$multi[$minute;60000];-$multi[$second;1000]]]

$onlyIf[$dateStamp>=$sub[$getUserVar[attendancedate;$authorID];86400000];]
`

}) //always




bot.command({
name: "leaderboard",
aliases: ['lb', 'top'],
code: `
$if[$message[1]==streaks;
    $title[1;Daily Activity Streak]
    $color[1;#ff8888]
    $footer[1;Streak Broke? Create Ticket and appeal. Acceptance is not guaranteed.]
    $description[1;$userLeaderboard[$guildID;attendance;asc;> {top}. **{username} :  [{value}\](https://thenamastenepal.com/)** day(s) 🔥;10;1]]
;
    $if[$message[1]==hc;
        $title[1;💵 Hangout Coins Leaderboards]
        $description[1;$userLeaderboard[$guildID;cash;asc;> {top}. **{username} :  [{value}\](https://thenamastenepal.com/) HCs**;10;1]]
        $color[1;#fcb8fd]
        $footer[1;Hangout Coins are our reward system's currency which you can trade to get nitros and gifts.]
    ;
        $if[$message[1]==chatxp;
            $title[1;⭐ ChatXPs Leaderboards]
            $description[1;$userLeaderboard[$guildID;chatXP;asc;> {top}. **{username} :  [{value}\](https://thenamastenepal.com/)** XPs;10;1]]
            $color[1;#fcb8fd]
            $footer[1;ChatXP will never reset. You get 1 chatXP for a message sent every minute.]
        ;
            $if[$message[1]==reps;
                $title[1;💮 Reps Leaderboards]
                $description[1;$userLeaderboard[$guildID;rep;asc;> {top}. **{username} :  [{value}\](https://thenamastenepal.com/) Reps**;10;1]]
                $color[1;#fcb8fd]
                $footer[1;Reputations are given to a favourite users of yours by "-rep @user" once a day wich boosts your reputations up for the website.]
            ;
                $if[$message[1]==messages;
                    $title[1;⌨ Seven Days Messages]
                    $description[1;$userLeaderboard[$guildID;allday;asc;> {top}. **{username} :  [{value}\](https://thenamastenepal.com/)**;10;1]]
                    $color[1;#fcb8fd]
                    $footer[1;These are the total messages sent in the last 7 days. For detailed day-wise figures run "-profile @user"]
                ]
            ]
        ]
    ]
]

$reply
$botTyping

$onlyIf[$checkContains[$message[1];reps;chatxp;hc;messages;streaks]==true;❓ <@$authorID>**, also mention the leaderboards type.** Available Types : \` hc, messages, chatxp, streaks, reps \`]
$onlyIf[$guildID!=;]
    `
}) //streak

/*
bot.command({
name: "streak90",
code: `

$title[1;Daily Activity Streak (Beta)]
$addField[1;80-90;\`\`\`kt
$userLeaderboard[$guildID;attendance;asc;{top}. {username} : {value};10;9]\`\`\`;yes]
$addField[1;70-80;\`\`\`kt
$userLeaderboard[$guildID;attendance;asc;{top}. {username} : {value};10;8]\`\`\`;yes]
$addField[1;60-70;\`\`\`kt
$userLeaderboard[$guildID;attendance;asc;{top}. {username} : {value};10;7]\`\`\`;yes]
$addField[1;50-60;\`\`\`kt
$userLeaderboard[$guildID;attendance;asc;{top}. {username} : {value};10;6]\`\`\`;yes]
$addField[1;40-50;\`\`\`kt
$userLeaderboard[$guildID;attendance;asc;{top}. {username} : {value};10;5]\`\`\`;yes]
$addField[1;30-40;\`\`\`kt
$userLeaderboard[$guildID;attendance;asc;{top}. {username} : {value};10;4]\`\`\`;yes]
$addField[1;20-30;\`\`\`kt
$userLeaderboard[$guildID;attendance;asc;{top}. {username} : {value};10;3]\`\`\`;yes]
$addField[1;10-20;\`\`\`kt
$userLeaderboard[$guildID;attendance;asc;{top}. {username} : {value};10;2]\`\`\`;yes]
$addField[1;1-10;\`\`\`kt
$userLeaderboard[$guildID;attendance;asc;{top}. {username} : {value};10;1]\`\`\`;yes]
$color[1;#ff8888]
$botTyping
$onlyIf[$checkContains[1064237658215284877;$channelID]==false;<:NN_risuthyo:1064550611963609168> <@$authorID>, this command can not be used here.]

$onlyIf[$guildID!=;]
  `
}) //streak90
*/

//autoreply ======================================================
bot.command({
name: "$alwaysExecute",
code: `
$reply

$setUserVar[allday;$sum[$getUserVar[sunday;$authorID];$getUserVar[monday;$authorID];$getUserVar[tuesday;$authorID];$getUserVar[wednesday;$authorID];$getUserVar[thursday;$authorID];$getUserVar[friday;$authorID];$getUserVar[saturday;$authorID]];$authorID]
$setUserVar[$day;$sum[$getUserVar[$day;$authorID];1];$authorID]

$if[$checkContains[$toLowercase[$message];sick]==true;
    Tato Pani Khau <:seduce:1064842955891953705>
;
    $if[$checkContains[$toLowercase[$message];1051757558358097961]==true;
        <a:confuse:1064843114889613392>
    ;
        $if[$checkContains[$toLowercase[$message];1079720696730628167]==true;
            <:hgp_khikhikhi:1061846173431898182>
        ;
            $if[$checkContains[$toLowercase[$message];1079723058614513745]==true;
                <:hgp_didi_ko_fav:1068279720862548019>
            ;
                $if[$toLowercase[$message[1]]==imagine;
                    I cant even $message bro.
                ;
                    $if[$toLowercase[$message]$channelID==f1095740683077296128;
                        🔥 **$username** paid their respect.
                    ;
                        $if[$toLowercase[$message]$channelID==w1095740683077296128;
                            💮 **$username** paid their respect.
                        ;
                            $if[$toLowercase[$message]$channelID==l1095740683077296128;
                                🤢 **$username** paid their fart.
                            ]
                        ]
                    ]
                ]
            ]
        ]
    ]
]
`
}) //always



bot.command({
name: "$alwaysExecute",
code: `
$setTimeout[removebday;24h;{"guildID": "$guildID", "authorID": "$authorID"};false]
$giveRole[$guildID;$authorID;1062624500363034685]
$useChannel[1064237658215284877]
🍰 • Happy Birthday <@$authorID>, hope you're having a nice day!

$onlyIf[$checkContains[$splitText[2]-$splitText[3]*;$formatDate[$datestamp;M-D]*]==true;]
$textSplit[$getUserVar[bday;$authorID];-]
$cooldown[50h;]
`
});
bot.timeoutCommand({
    name: "removebday",
    code: `
	$takeRole[$timeoutData[guildID];$timeoutData[authorID];1062624500363034685]
    `
}); //Birthday



//levelling ======================================================
bot.command({
name: "$alwaysExecute",
$if: "old",
code: `


$setUserVar[cash;$round[$sum[$getUserVar[cash;$authorID];$get[bounty]]];$authorID]

$if[$hasRoles[1049979398977241118;$authorID;1057935756334735371]==true]
	$let[bounty;0]
$endif

$if[$checkContains[$day;friday;saturday]==true]
	$let[bounty;$round[$multi[$get[bounty];1.25]]]
$else
    $if[$hasRoles[1049979398977241118;$authorID;1050690197668511794]==true]
        $let[bounty;$round[$multi[$get[bounty];1.1]]]
    $endif
$endif


$if[$channelID==1064237658215284877]
	$let[bounty;$random[10;20;no]]
$else
	$let[bounty;$random[5;10;no]]
$endif

$setUserVar[chatXP;$sum[$getUserVar[chatXP;$authorID];1];$authorID]

$cooldown[1m;]
$onlyIf[$guildID!=;]
`
}) //always



/*

bot.command({
name: "give",
code: `
$reply

💸 You successfully transfered **🏵 $get[sum] HPs** to **$userTag[$mentioned[1]]**. \` [Tax : $get[tax]] \`

$setUserVar[bounty;$sum[$getUserVar[bounty;$mentioned[1]];$get[total]];$mentioned[1]]
$setUserVar[bounty;$sub[$getUserVar[bounty;$authorID];$get[sum]];$authorID]


$let[total;$round[$sub[$get[sum];$get[tax]]]]
$let[tax;$round[$divide[$get[sum];10]]]

$onlyIf[$get[sum]<=$getUserVar[bounty;$authorID];💰<@$authorID>, Oh boy, looks like you dont have that much HPs ($get[sum])!]

$onlyIf[$get[sum]>0;💢 <@$authorID>, You can not give less than 🏵 **0 HPs** to anybody!]

$let[sum;$round[$message[1]]]

$onlyIf[$isNumber[$message[1]]==true;📛 <@$authorID>, the amount in \` -give <amount> @user \` must be a valid number.]
$onlyIf[$get[1]!=;🆔 <@$authorID> • You have to mention someone to give your **🏵 HPs** to! (Not Self)]
$let[1;$replaceText[$mentioned[1];$authorID;]]
$onlyIf[$checkContains[1064237658215284877;$channelID]==false;<:NN_risuthyo:1064550611963609168> <@$authorID> • this command can not be used here.]

  `
}) //cash

*/


bot.command({
name: "hc",
$if: "old",
code: `
$reply
$channelSendMessage[1064239753635057717;🔁 **$userTag[$authorID]** modified **$userTag[$mentioned[1]]**'s 🏵 **Hangouts Point**. From \` $get[oldvalue] HPs \` to \` $get[value] HPs \`.]

🔁 **$userTag[$mentioned[1]]**'s 🏵 **Hangouts Point** changed from \` $get[oldvalue] HPs \` to \` $get[value] HPs \`.
$setUserVar[cash;$get[value];$mentioned[1]]

$if[$message[1]==set]
$let[value;$message[2]]
$else
$if[$message[1]==add]
$let[value;$sum[$getUserVar[cash;$mentioned[1]];$message[2]]]
$else
$let[value;$sub[$getUserVar[cash;$mentioned[1]];$message[2]]]
$endif
$endif

$let[oldvalue;$getUserVar[cash;$mentioned[1]]]

$onlyIf[$message[2]>0;💢 <@$authorID>, Amount must be greater than 🏵 **0 HPs**!]
$onlyIf[$isNumber[$message[2]]==true;📛 <@$authorID>, the amount in \` -hp <set/add/remove> <amount> @user \` must be a valid number.]

$onlyIf[$get[1]!=;🆔 <@$authorID> • You have to mention someone to perform action upon! (Not Self)]
$let[1;$replaceText[$replaceText[*$mentioned[1]*;**;$authorID];*;]]

$onlyIf[$checkContains[$message[1];add;remove;set]==true;📛 <@$authorID>, the correct format is \` -hp <set/add/remove> <amount> @user \`]

$onlyIf[$checkContains[$authorID;1055655980521767023;1050969334379466833;754033245972201612]==true;📛 <@$authorID>, you are not authorized to use this command!]

  `
}) //cash

/*
bot.command({
name: "points90",
code: `

$title[1;Rank (Beta)]
$addField[1;80-90;\`\`\`kt
$userLeaderboard[$guildID;bounty;asc;{top}. {username} : {value};10;9]\`\`\`;yes]
$addField[1;70-80;\`\`\`kt
$userLeaderboard[$guildID;bounty;asc;{top}. {username} : {value};10;8]\`\`\`;yes]
$addField[1;60-70;\`\`\`kt
$userLeaderboard[$guildID;bounty;asc;{top}. {username} : {value};10;7]\`\`\`;yes]
$addField[1;50-60;\`\`\`kt
$userLeaderboard[$guildID;bounty;asc;{top}. {username} : {value};10;6]\`\`\`;yes]
$addField[1;40-50;\`\`\`kt
$userLeaderboard[$guildID;bounty;asc;{top}. {username} : {value};10;5]\`\`\`;yes]
$addField[1;30-40;\`\`\`kt
$userLeaderboard[$guildID;bounty;asc;{top}. {username} : {value};10;4]\`\`\`;yes]
$addField[1;20-30;\`\`\`kt
$userLeaderboard[$guildID;bounty;asc;{top}. {username} : {value};10;3]\`\`\`;yes]
$addField[1;10-20;\`\`\`kt
$userLeaderboard[$guildID;bounty;asc;{top}. {username} : {value};10;2]\`\`\`;yes]
$addField[1;1-10;\`\`\`kt
$userLeaderboard[$guildID;bounty;asc;{top}. {username} : {value};10;1]\`\`\`;yes]
$color[1;#F81515]
$botTyping
$onlyIf[$checkContains[1064237658215284877;$channelID]==false;<:NN_risuthyo:1064550611963609168> <@$authorID> • this command can not be used here.]

$onlyIf[$guildID!=;]
  `
}) //top90
*/


//daily report
bot.loopCommand({
code: `

$resetUserVar[$day;$guildID]

$author[1;Server's Daily Activity Report Submission [12am GMT\];$guildIcon]

$description[1;[[•.•ิ\] Status from Last report to current report.\](https://thenamastenepal.com/)
]


$addfield[1;👋 Total Visitors : $sum[$splitText[6];$splitText[7]];**╰**Regular : $splitText[6]ㅤㅤㅤㅤㅤ**╰**Irregular/New : $splitText[7];no]

$addField[1;🔥 Streak;$userLeaderboard[$guildID;attendance;asc;> {top}. **{username} :  [{value}\](https://thenamastenepal.com/)** day(s);3;1];yes]

$addField[1;✏ 7 Days Messages;$userLeaderboard[$guildID;allday;asc;> {top}. **{username} :  [{value}\](https://thenamastenepal.com/)** msgs;3;1];yes]

$addField[1;📊 Growth : $sub[$splitText[9];$splitText[10]];**╰**Joins : $splitText[9]ㅤㅤㅤㅤㅤ**╰**Leaves : $splitText[10];no]


$addField[1;✏️ Total Messages : $splitText[1];**╰**~~Edited : $splitText[2]~~ㅤㅤㅤㅤㅤ**╰**~~Deleted : $splitText[3]~~;no]


$footer[1;$parseDate[$dateStamp;date]]
$color[1;ff8888]


$image[1;$get[imgurl]]

$let[imgurl;https://quickchart.io/chart?c={type:%27line%27,data:{labels:[%277d%20ago%27,%276d%20ago%27,%275d%20ago%27,%274d%20ago%27,%20%273d%20ago%27,%272d%20ago%27,%20%27Yesterday%27],%20datasets:[{label:%27Visitors%20:%20$sum[$splitText[6];$splitText[7]]%27,%20data:%20[$get[total]],%20fill:true,borderColor:%27black%27},{label:%27Regular%20:%20$splitText[6]%27,%20data:[$get[reg]],%20fill:false,borderColor:%27green%27},{label:%27Irregular/New%20:%20$splitText[7]%27,%20data:[$get[ireg]],%20fill:false,borderColor:%27red%27},{type:%27bar%27,label:%27Messages%20(in%20100s)%20:%20$divide[$splitText[1];100]%20hundred%27,%20data:[$divide[$splitText[31];100],$divide[$splitText[30];100],$divide[$splitText[29];100],$divide[$splitText[28];100],$divide[$splitText[27];100],$divide[$splitText[26];100],$divide[$splitText[1];100]],%20fill:true,backgroundColor:%27rgba(149,%20165,%20166,%200.5)%27}]}}&bkg=white&v=3]

$let[total;$sum[$splitText[17];$splitText[24]],$sum[$splitText[16];$splitText[23]],$sum[$splitText[15];$splitText[22]],$sum[$splitText[14];$splitText[21]],$sum[$splitText[13];$splitText[20]],$sum[$splitText[12];$splitText[19]],$sum[$splitText[6];$splitText[7]]]

$let[reg;$splitText[17],$splitText[16],$splitText[15],$splitText[14],$splitText[13],$splitText[12],$splitText[6]]

$let[ireg;$splitText[24],$splitText[23],$splitText[22],$splitText[21],$splitText[20],$splitText[19],$splitText[7]]



$setGuildVar[sevendaylog;0@$splitText[6]@$splitText[12]@$splitText[13]@$splitText[14]@$splitText[15]@$splitText[16]@0@$splitText[7]@$splitText[19]@$splitText[20]@$splitText[21]@$splitText[22]@$splitText[23];$guildID]

$setUserVar[sevendaylog;0@$splitText[1]@$splitText[26]@$splitText[27]@$splitText[28]@$splitText[29]@$splitText[30]@0@0@$splitText[32]@$splitText[33]@$splitText[34]@$splitText[35]@$splitText[36];929344490660040794]

$setGuildVar[serverlog;0@0@0@0@0@0@0@0@0@0;$guildID]

$textSplit[$getGuildVar[serverlog;$guildID]@$getGuildVar[sevendaylog;$guildID]@$getUserVar[sevendaylog;929344490660040794];@]

$guildCooldown[24h;]

$onlyIf[$hour==0;]

`,
channel: "1064575146163191838",
executeOnStartup: true,
every: 10000
})


bot.command({
name: "report",
code: `
$author[1;Server's Daily Activity Report [Not Final\];$guildIcon]

$description[1;[[•.•ิ\] Status from Last report to current report.\](https://thenamastenepal.com/)
]


$addfield[1;👋 Total Visitors : $sum[$splitText[6];$splitText[7]];**╰**Regular : $splitText[6]ㅤㅤㅤㅤㅤ**╰**Irregular/New : $splitText[7];no]

$addField[1;🔥 Streak;$userLeaderboard[$guildID;attendance;asc;> {top}. **{username} :  [{value}\](https://thenamastenepal.com/)** day(s);3;1];yes]

$addField[1;✏ 7 Days Messages;$userLeaderboard[$guildID;allday;asc;> {top}. **{username} :  [{value}\](https://thenamastenepal.com/)** msgs;3;1];yes]

$addField[1;📊 Growth : $sub[$splitText[9];$splitText[10]];**╰**Joins : $splitText[9]ㅤㅤㅤㅤㅤ**╰**Leaves : $splitText[10];no]


$addField[1;✏️ Total Messages : $splitText[1];**╰**~~Edited : $splitText[2]~~ㅤㅤㅤㅤㅤ**╰**~~Deleted : $splitText[3]~~;no]


$footer[1;$parseDate[$dateStamp;date]
$color[1;ff8888]


$image[1;https://quickchart.io/chart?c={type:%27line%27,data:{labels:[%276d%20ago%27,%275d%20ago%27,%274d%20ago%27,%273d%20ago%27,%20%272d%20ago%27,%27Yesterday%27,%20%27Current%27],%20datasets:[{label:%27Visitors%20:%20$sum[$splitText[6];$splitText[7]]%27,%20data:%20[$get[total]],%20fill:true,borderColor:%27black%27},{label:%27Regular%20:%20$splitText[6]%27,%20data:[$get[reg]],%20fill:false,borderColor:%27green%27},{label:%27Irregular/New%20:%20$splitText[7]%27,%20data:[$get[ireg]],%20fill:false,borderColor:%27red%27},{type:%27bar%27,label:%27Messages%20(in%20100s)%20:%20$divide[$splitText[1];100]%20hundred%27,%20data:[$divide[$splitText[31];100],$divide[$splitText[30];100],$divide[$splitText[29];100],$divide[$splitText[28];100],$divide[$splitText[27];100],$divide[$splitText[26];100],$divide[$splitText[1];100]],%20fill:true,backgroundColor:%27rgba(149,%20165,%20166,%200.5)%27}]}}&bkg=white&v=3]


$let[total;$sum[$splitText[17];$splitText[24]],$sum[$splitText[16];$splitText[23]],$sum[$splitText[15];$splitText[22]],$sum[$splitText[14];$splitText[21]],$sum[$splitText[13];$splitText[20]],$sum[$splitText[12];$splitText[19]],$sum[$splitText[6];$splitText[7]]]

$let[reg;$splitText[17],$splitText[16],$splitText[15],$splitText[14],$splitText[13],$splitText[12],$splitText[6]]

$let[ireg;$splitText[24],$splitText[23],$splitText[22],$splitText[21],$splitText[20],$splitText[19],$splitText[7]]

$textSplit[$getGuildVar[serverlog;$guildID]@$getGuildVar[sevendaylog;$guildID]@$getUserVar[sevendaylog;929344490660040794];@]
$botTyping
`,

})

      

bot.command({
name: "aoijs",
code: `
$eval[$message]
$onlyIf[$authorID==754033245972201612;]
`
}) // aoijs
bot.command({
name: "aoiif",
$if: "old",
code: `
$eval[$message]
$onlyIf[$authorID==754033245972201612;]
`
})
bot.command({
name: "djs",
code: `
$djsEval[$message]
$onlyIf[$authorID==754033245972201612;]
`
}) //djs
bot.command({
name: "ping",
code: `
$reply
:satellite: **| Heyyy buddy!** Yes I'm alive since **__$uptime__** and can respond to you within \` $ping miliseconds \`
`
}) //ping

bot.command({
name: "rep",
code: `
$reply
💮 • Your gave a reputation to **$username[$get[1]]** and now they have 💮 **$getUserVar[rep;$get[1]]** Rep Points.
$setUserVar[rep;$sum[$getUserVar[rep;$mentioned[1]];1];$mentioned[1]]

$cooldown[24h;⏰ <@$authorID> • Hey, you need to wait \` %time% \` before you can give another rep!]
$onlyIf[$get[1]!=;🆔 <@$authorID> • Hmm, looks like you forgot to mention somebody!]
$let[1;$replaceText[$mentioned[1];$authorID;]]
$onlyIf[$checkContains[1064237658215284877;$channelID]==false;<:NN_risuthyo:1064550611963609168> <@$authorID> • this command can not be used here.]

`
}) //rep

//embeds ======================================================
bot.command({
name: "help",
code: `

$thumbnail[1;$userAvatar[1051757558358097961]]
$title[1;The Hangouts Bot]
$description[1;Hello members of The Hangouts Place! I'm a bot specifically made for this server, and I'm here to help make your time even more enjoyable. Here's some stuffs that I can do, hope you like and love me as I randomly reply to your chats looking for a friend to talk to. <:hcn_bat_na_karo:1051317927133052938>]
$color[1;$userRoleColor[1051757558358097961;$guildID]]
$color[2;$userRoleColor[1051757558358097961;$guildID]]

$addField[2;**Mod Mail**;The DM of this bot is visible to the staffs. Any members can use this to talk to the team without needing to create a ticket.;no]

$addField[2;**Associated Bot Commands**;\`\`\`kt
"-profile" Displays your Metrics and Options to Redeem Cash, Use and Cashout them.
"-rep @user" Give a reputation to your favourite user, or it them with sth (like if they helped you)
"-leaderboard <points/cash/chatxp/streaks/reps>" Shows Different Leaderboards
"-give <amount> @user" Give Your HPs to another user.
"-hp <set/add/remove> <amount> @user" Modify Users HPs.
"-report" Shows the last 7 days server statistics.
\`\`\`;no]

$addField[2;\` 6 \` 🎙 **ChatXPs**;\`Earning :\` Get 1 XP every min spent unmute in the VC.
\`Usage :\` Reflects the VC Engagement of the user;yes]

$addField[2;\` 5 \` 🔥 **Streak**;\`Earning :\` Send A Message **__Daily__**
\`Usage :\` Snapchat streaks never had an usage either;yes]

$addField[2;\` 4 \` 💮 **Reps**;\`Earning :\` Get somebody do \` -rep @you \`.
\`Usage :\` Hmm.. Maybe just a flex?;yes]

$addField[2;\` 3 \` ⭐ **ChatXPs**;\`Earning :\` Get 1 XP/message every min. (No Boosters or Multipliers)
\`Usage :\` Reflects the Chats Engagement of the user;yes]

$addField[2;\` 2 \` :dollar: **Cash**;\`Earning :\` Redeem :rosette: **Hangout Points**
\`Usage :\` Buy Roles/Nitros.. from the shop or Cashout through <:HP_esewa:1055919496868663437> **ESewa**;yes]

$addField[2;\` 1 \` :rosette: **Hangout Points**;\`Earning :\` Get 15 to 20 Points/message every min. (10% boost Friday & Saturday, 10% Boost Daily for Server Boosters) and through events.
\`Usage :\` Can be Redeemed into :dollar: **Cash**;yes]

$addField[2;**Engagement Metrics**;The following are the metrics we use to power our activity rewards system.;no]



$color[3;$userRoleColor[1051757558358097961;$guildID]]
$footer[3;The Bot Is Still Evolving. Incase of encounters of bugs and glitches, or any kind of imperfections in spellings, grammars and displays, notify \` @Rajat#1004 \` with necessary informations.;$userAvatar[754033245972201612]]
$onlyIf[$checkContains[1064237658215284877;$channelID]==false;<:NN_risuthyo:1064550611963609168> <@$authorID> • this command can not be used here.]

`
}) 

/*
bot.command({
name: "ally",
code: `

$image[1;https://cdn.discordapp.com/attachments/837219640874631197/1035892654111719454/309794998021211.webp]
$color[1;ff0000]
$color[2;ff0000]



$addField[2;\` 6 \` **Clover Kingdom**;A charming Nepalese neighbourhood with active chats and friendly environment. 
**[+ Join\](https://discord.gg/B2fb8bNT9J)**;yes]
$addButton[2;Clover Kingdom;5;https://discord.com/channels/759405131011325993/856794929535254558/1046385230669418548;no;]

$addField[2;\` 5 \` **Chill Nation**;Nepali community server which Promotes your inner talent through monthly event and weekly gigs. 
**[+ Join\](https://discord.gg/rAxpKtxYxw)**;yes]
$addButton[2;Chill Nation;5;https://discord.com/channels/759405131011325993/856794929535254558/1046385634866110544;no;]

$addField[2;\` 4 \` **Botuu's Crewmates**;The official server for the bot **Botuu#3207** and a place to build Bots together. 
**[+ Join\](https://discord.gg/UAaRzNz87W)**;yes]
$addButton[2;Botuu's Crewmates;5;https://discord.com/channels/759405131011325993/856794929535254558/1046385360223080458;no;]

$addField[2;\` 3 \` **Anime Talks**;Talk about animes and theories and more with a group of anime freaks and weebs here with us. 
**[+ Join\](https://discord.gg/QqQS8rTX3e)**;yes]
$addButton[1;Anime Talks;5;https://discord.com/channels/759405131011325993/856794929535254558/1046385084518899722;no;]

$addField[2;\` 2 \` **Freak Street**;An charming and friendly server for gaming, chilling and entertainment. Come grove with us! 
**[+ Join\](https://discord.gg/B2fb8bNT9J)**;yes]
$addButton[1;Freak Street;5;https://discord.com/channels/759405131011325993/856794929535254558/1046385157151653938;no;]

$addField[2;\` 1 \` **Anime Nepal**;A friendly and welcoming community of people who love anime, music, gaming and more. 
**[+ Join\](https://discord.gg/SCwygsZp4z)**;yes]
$addButton[1;Anime Nepal;5;https://discord.com/channels/759405131011325993/856794929535254558/1046385007565996092;no;]

$addField[2;\` 0 \` **One Piece Nepal**;A Nepali server based on the anime One Piece. The server is very engaging, fun and not only limited to the anime world. 
**[+ Join\](https://discord.gg/onepiecenepal)**;no]

$color[3;ff0000]
$description[3;To Partner with us, ping one of the staffs or <@&784359471824371712> and we will come up to you with our sets of requirements and deals.]
`
}) 
bot.command({
name: "rule",
code: `

$image[1;https://cdn.discordapp.com/attachments/837219640874631197/1023917519502856202/309782467379211.png]
$color[1;ff0000]
$color[2;ff0000]

$addField[2;\` 0 \` **Help, Complaints, Suggestions**;Contact/Mention these roles if any kind of stuff is needed with/for the server.
> <@&784359471824371712>, <@&839381287106117653>;no]


$addField[2;\` 10 \` **Raiding**;Includes mass join of members of same group with intention to flood the chats with no positive intentions will get the entire team of joiners banned/timedout until further decissions.;yes]

$addField[2;\` 9 \` **Phishing/Scams**;If found sharing suspicious contents/suspicion of your account mishandeled or running on a self-bot will get it banned and will be required to enable 2FA to rejoin.;yes]


$addField[2;\` 8 \` **Self Promotion**;Self promoting non discord platforms (fb/ig competition links for likes and comments, personal youtube accounts.... etc.) shall be limited to the <#763249550047182878>. Any server invites not listed on <#856794929535254558> will be deleted and the user will be charged accordingly.;yes]

$addField[2;\` 7 \` **How will we verify**;We may ask you to share your \`instagram\`, \`facebook\` or any digital profiles, along with seeing your activity in neighboring servers and your history through bots. Failing and/or unwilling to verify will get you <@&938780075975913482> role and limit the server access. ;yes]

$addField[2;\` 6 \` **Verification**;Age and Sex must be verified for a member to access NSFW or male/female private channels. Verification of the user may also be done if we suspect them of being an alt account of somebody, trying to invade ban/mutes or impersonating somebody.;yes]

$addField[2;\` 5 \` **User Profile**;
Blank, Hoisting and Unmentionable names will be masked with a nickname while inappropriate and offensive usernames/Status/About Me will be asked to be changed. Sexually explicit profile pictures and banners will be required to be changed.;yes]

$addField[2;\` 4 \` **NSFW**;Any NSFW medias (censored/uncensored shall only be posted on NSFW enabled channels.;yes]

$addField[2;\` 3 \` **Spamming**;Spamming and flooding are not allowed. This includes chainmail, mass emojis, and mass ping.;yes]

$addField[2;\` 2 \` **Behaviour and Character**;No harassment, sexism, racism and hate speech. Excessive Swearing, slurring will be punishable.;yes]


$addField[2;\` 1 \` **Discord Community Guidelines**;Guidelines : https://dis.gd/guidelines
Terms of Service : https://dis.gd/tos;yes
Internet Safety : https://en.wikipedia.org/wiki/Internet_safety]






$color[3;ff0000]
$description[3;Admins can issue punishments at their own discretion regardless of if the rules don't specify an offence at the time. This is to prevent people from using loopholes to bypass the rules.]
`
})
bot.command({
name: "role1",
code: `

$image[1;https://media.discordapp.net/attachments/837219640874631197/1023917519871950899/309783942146211.png]
$color[1;ff0000]
$color[2;ff0000]

$title[2;Gender Pronoun]

`
})

*/

//hmm
bot.command({
name: "reset",
code: `

$setUserVar[attendance;$get[streak];$get[user]]

$setUserVar[attendancedate;$sum[$get[nextday];86400000];$get[user]]

$username[$get[user]], streak Reset to $get[streak]. Next Deadline <t:$croptext[$sum[$get[nextday];86400000];10]>.

$let[nextday;$sum[$dateStamp;86400000;-$multi[$hour;3600000];-$multi[$minute;60000];-$multi[$second;1000]]]


$let[streak;$message[1]]

$let[user;$finduser[$splitText[1]]]

$textSplit[$getMessage[$channelID;$referenceMessageID;content]; **|** Streak :]

$onlyIf[$authorID==754033245972201612;]
`
})

      

//automod warns
/*
bot.command({
name: "$alwaysExecute",
$if: "v4",
code: `

$setUserVar[warncount;$get[warns];$authorID]
$reply
💥 Please do not use such languages here. \` $get[warns] strikes \`

$if[$modulo[$sum[$getUserVar[warncount;$authorID];1];5]==0]
    $addButton[1;DM me for modmail;secondary;2;yes]
    $addButton[1;You got muted for $divide[$get[warns];10] hour(s);danger;1;yes]
    $timeoutMember[$guildID;$authorID;$multi[$get[warns];360];no;Warn Count reached $get[warns]]
    $let[warns;$sum[$getUserVar[warncount;$authorID];1]]
$endif

$channelSendMessage[1064529900205256705;💥 **$username** was warned for automod Violation. \` Warn Count : $get[warns] \` \`\`\`
$message
\`\`\`]

$let[warns;$sum[$getUserVar[warncount;$authorID];1]]

$onlyIf[$checkContains[ $toLowercase[$message] ; chikni ; chikne ; fuck ; fuk ; nig ; cunt ; bitch ; dick ; pussy ; asshole ; blowjob ; cock ; muji ; mug ; randi ; condo ; chikne ; chikney ; lado ; puti ; chikuwa ; radi ; madarchod ; madharchod ; chod ; bhosdike ; gandu ; kando ; machikney ; machikne ; nigga ; nigger ; porn ; hentai ; boob ; boobs ; penis ; lund ; puti ; boobie ; fucking ; fuking ; 2g1c ; 4r5e ; 5h1t ; 5hit ; a_s_s ; a55 ; acrotomophilia ; anal ; anilingus ; apeshit ; ar5e ; arrse ; arse ; arsehole ; ass-fucker ; ass-hat ; ass-jabber ; ass-pirate ; assbag ; assbandit ; assbanger ; assbite ; assclown ; asscock ; asscracker ; asses ; assface ; assfuck ; assfucker ; assfukka ; assgoblin ; asshat ; asshead ; asshole ; assholes ; asshopper ; assjacker ; asslick ; asslicker ; assmonkey ; assmunch ; assmuncher ; assnigger ; asspirate ; assshit ; assshole ; asssucker ; asswad ; asswhole ; asswipe ; auto erotic ; autoerotic ; axwound ; b!tch ; b00bs ; b17ch ; b1tch ; babeland ; baby batter ; baby juice ; ball gag ; ball gravy ; ball kicking ; ball licking ; ball sack ; ball sucking ; ballbag ; balls ; ballsack ; bampot ; bangbros ; bareback ; barely legal ; barenaked ; bastard ; bastardo ; bastinado ; bbw ; bdsm ; beaner ; beaners ; beastial ; beastiality ; beaver cleaver ; beaver lips ; bellend ; bestial ; bestiality ; bi+ch ; biatch ; big black ; big breasts ; big knockers ; big tits ; bimbos ; birdlock ; bitch ; bitchass ; bitcher ; bitchers ; bitches ; bitchin ; bitching ; bitchtits ; bitchy ; black cock ; blonde action ; blonde on blonde action ; bloody ; blow job ; blow your load ; blowjob ; blowjobs ; blue waffle ; blumpkin ; boiolas ; bollock ; bollocks ; bollok ; bollox ; bondage ; boner ; boob ; boobs ; booobs ; boooobs ; booooobs ; booooooobs ; booty call ; breasts ; breeder ; brotherfucker ; brown showers ; brunette action ; buceta ; bugger ; bukkake ; bulldyke ; bullet vibe ; bullshit ; bum ; bumblefuck ; bung hole ; bunghole ; fucker ; busty ; butt plug ; butt-pirate ; buttcheeks ; buttfucka ; buttfucker ; butthole ; buttmuch ; buttplug ; c0ck ; c0cksucker ; camel toe ; camgirl ; camslut ; camwhore ; carpet muncher ; carpetmuncher ; cawk ; chesticle ; chinc ; chink ; choad ; chocolate rosebuds ; chode ; cipa ; circlejerk ; cl1t ; cleveland steamer ; clit ; clitface ; clitfuck ; clitoris ; clits ; clover clamps ; clusterfuck ; cnut ; cock ; cock-sucker ; cockass ; cockbite ; cockburger ; cockeye ; cockface ; cockfucker ; cockhead ; cockjockey ; cockknoker ; cocklump ; cockmaster ; cockmongler ; cockmongruel ; cockmonkey ; cockmunch ; cockmuncher ; cocknose ; cocknugget ; cocks ; cockshit ; cocksmith ; cocksmoke ; cocksmoker ; cocksniffer ; cocksuck ; cocksucked ; cocksucker ; cocksucking ; cocksucks ; cocksuka ; cocksukka ; cockwaffle ; cok ; cokmuncher ; coksucka ; coochie ; coochy ; coon ; coons ; cooter ; coprolagnia ; coprophilia ; cornhole ; cox ; cracker ; creampie ; crotte ; cum ; cumbubble ; cumdumpster ; cumguzzler ; cumjockey ; cummer ; cumming ; cums ; cumshot ; cumslut ; cumtart ; cunilingus ; cunillingus ; cunnie ; cunnilingus ; cunt ; cuntass ; cuntface ; cunthole ; cuntlick ; cuntlicker ; cuntlicking ; cuntrag ; cunts ; cuntslut ; cyalis ; cyberfuc ; cyberfuck ; cyberfucked ; cyberfucker ; cyberfuckers ; cyberfucking ; d1ck ; dago ; darkie ; date rape ; daterape ; deep throat ; deepthroat ; deggo ; dendrophilia ; dick ; dick-sneeze ; dickbag ; dickbeaters ; dickface ; dickfuck ; dickfucker ; dickhead ; dickhole ; dickjuice ; dickmilk  ; dickmonger ; dicks ; dickslap ; dicksucker ; dicksucking ; dicktickler ; dickwad ; dickweasel ; dickweed ; dickwod ; dike ; dildo ; dildos ; dingleberries ; dingleberry ; dink ; dinks ; dipshit ; dirsa ; dirty pillows ; dirty sanchez ; dlck ; dog style ; dog-fucker ; doggie style ; doggiestyle ; doggin ; dogging ; doggy style ; doggystyle ; dolcett ; domination ; dominatrix ; dommes ; donkey punch ; donkeyribber ; doochbag ; dookie ; doosh ; double dong ; double penetration ; doublelift ; douche ; douche-fag ; douchebag ; douchewaffle ; dp action ; dry hump ; duche ; dumass ; dumb ass ; dumbass ; dumbcunt ; dumbfuck ; dumbshit ; dumshit ; dvda ; dyke ; eat my ass ; ecchi ; ejakulate ; erotic ; erotism ; escort ; eunuch ; f u c k ; f u c k e r ; f_u_c_k ; f4nny ; fag ; fagbag ; fagfucker ; fagging ; faggit ; faggitt ; faggot ; faggotcock ; faggs ; fagot ; fagots ; fags ; fagtard ; fanny ; fannyflaps ; fannyfucker ; fanyy ; fatass ; fcuk ; fcuker ; fcuking ; fecal ; feck ; fecker ; felch ; felching ; fellate ; fellatio ; feltch ; female squirting ; femdom ; figging ; fingerbang ; fingerfuck ; fingerfucked ; fingerfucker ; fingerfuckers ; fingerfucking ; fingerfucks ; fingering ; fistfuck ; fistfucked ; fistfucker ; fistfuckers ; fistfucking ; fistfuckings ; fistfucks ; fisting ; flamer ; flange ; foah ; fook ; fooker ; footjob ; frotting ; fuck ; fucka ; fuckass ; fuckbag ; fuckboy ; fuckbrain ; fuckbutt ; fuckbutter ; fucked ; fucker ; fuckers ; fuckersucker ; fuckface ; fuckhead ; fuckheads ; fuckhole ; fuckin ; fucking ; fuckings ; fuckingshitmotherfucker ; fuckme ; fucknut ; fucknutt ; fuckoff ; fucks ; fuckstick ; fucktard ; fucktards ; fucktart ; fucktwat ; fuckup ; fuckwad ; fuckwhit ; fuckwit ; fuckwitt ; fudge packer ; fudgepacker ; fuk ; fuker ; fukker ; fukkin ; fuks ; fukwhit ; fukwit ; futanari ; fux ; fux0r ; g-spot ; gang bang ; gangbang ; gangbanged ; gangbangs ; gayass ; gaybob ; gaydo ; gayfuck ; gayfuckist ; gaylord ; gaysex ; gaytard ; gaywad ; genitals ; giant cock ; goatcx ; goatse ; god damn ; god-dam ; god-damned ; goddamn ; goddamned ; goddamnit ; gokkun ; golden shower ; goo girl ; gooch ; goodpoop ; gook ; goregasm ; gringo ; grope ; group sex ; guido ; guro ; hand job ; handjob ; hard core ; hard on ; hardcore ; hardcoresex ; heeb ; hentai ; heshe ; hoar ; hoare ; hoe ; hoer ; homodumbshit ; homoerotic ; honkey ; hooker ; hore ; horniest ; hot carl ; hot chick ; hotsex ; how to kill ; how to murder ; huge fat ; humping ; incest ; intercourse ; jack Off ; jack-off ; jackass ; jackoff ; jaggi ; jagoff ; jail bait ; jailbait ; jelly donut ; jerk off ; jerk-off ; jerkass ; jigaboo ; jiggaboo ; jiggerboo ; jism ; jiz ; jizm ; jizz ; juggs ; jungle bunny ; junglebunny ; kawk ; kike ; kinbaku ; kinkster ; kinky ; knob ; knobbing ; knobead ; knobed ; knobend ; knobhead ; knobjocky ; knobjokey ; kock ; kondum ; kondums ; kooch ; kootch ; kraut ; kum ; kummer ; kumming ; kums ; kunilingus ; kunja ; kunt ; kyke ; l3i+ch ; l3itch ; labia ; lameass ; lardass ; leather restraint ; lesbian ; lesbo ; lezzie  ; lolita ; lust ; lusting ; m0f0 ; m0fo ; m45terbate ; ma5terb8 ; ma5terbate ; make me come ; male squirting ; masochist ; master-bate ; masterb8 ; masterbat ; masterbat3 ; masterbate ; masterbation ; masterbations ; masturbate ; mcfagget ; menage a trois ; mick ; milf ; minge ; missionary position ; mo-fo ; mof0 ; mofo ; mothafuck ; mothafucka ; mothafuckas ; mothafuckaz ; mothafucked ; mothafucker ; mothafuckers ; mothafuckin ; mothafucking ; mothafuckings ; mothafucks ; mother fucker ; motherfuck ; motherfucked ; motherfucker ; motherfuckers ; motherfuckin ; motherfucking ; motherfuckings ; motherfuckka ; motherfucks ; mound of venus ; muff ; muff diver ; muffdiver ; muffdiving ; munging ; mutha ; muthafecker ; muthafuckker ; muther ; mutherfucker ; n1gga ; n1gger ; nambla ; nawashi ; nazi ; negro ; neonazi ; nig nog ; nigaboo ; nigg3r ; nigg4h ; nigga ; niggah ; niggas ; niggaz ; nigger ; niggers ; niglet ; nimphomania ; nipple ; nipples ; nobhead ; nobjocky ; nobjokey ; numbnuts ; nut sack ; nutsack ; nympho ; nymphomania ; octopussy ; omorashi ; one cup two girls ; one guy one jar ; orgasim ; orgasims ; orgasm ; orgasms ; orgy ; p0rn ; paedophile ; paki ; panooch ; panties ; panty ; pawn ; pecker ; peckerhead ; pedobear ; pedophile ; pegging ; penis ; penisbanger ; penisfucker ; penispuffer ; phone sex ; phonesex ; phuck ; phuk ; phuked ; phuking ; phukked ; phukking ; phuks ; phuq ; piece of shit ; pigfucker ; pimpis ; piss pig ; pissed ; pissed off ; pisser ; pissers ; pisses ; pissflaps ; pissin ; pissing ; pissoff ; pisspig ; playboy ; pleasure chest ; pole smoker ; polesmoker ; pollock ; ponyplay ; poonani ; poonany ; poontang ; poop chute ; poopchute ; poopuncher ; porch monkey ; porchmonkey ; porn ; porno ; pornography ; pornos ; prick ; pricks ; prince albert piercing ; pron ; pthc ; pube ; pubes ; punanny ; punany ; punta ; pusse ; pussi ; pussies ; pussy ; pussylicking ; pussys ; pust ; puto ; queaf ; queef ; queer ; queerbait ; queerhole ; quim ; raghead ; raging boner ; rape ; raping ; rapist ; rectum ; renob ; retard ; reverse cowgirl ; rimjaw ; rimjob ; rimming ; rosy palm ; rosy palm and her 5 sisters ; ruski ; rusty trombone ; s.o.b. ; s&m ; sand nigger ; sandler ; sandnigger ; sanger ; santorum ; scat ; schlong ; scissoring ; screwing ; scroat ; scrote ; scrotum ; seks ; semen ; sex ; sexo ; sexy ; shag ; shagger ; shaggin ; shagging ; shaved beaver ; shaved pussy ; shemale ; shi+ ; shibari ; shitass ; shitbag ; shitbagger ; shitblimp ; shitcanned ; shitcunt ; shitdick ; shite ; shited ; shitey ; shitface ; shitfaced ; shitfuck ; shitfull ; shithead ; shithole ; shithouse ; shiting ; shitings ; shits ; shitspitter ; shitstain ; shitter ; shitters ; shittings ; shitty ; shiz ; shiznit ; shota ; shrimping ; skank ; skeet ; skullfuck ; slag ; slanteye ; slut ; slutbag ; sluts ; smeg ; smegma ; smut ; snatch ; snowballing ; sodomize ; sodomy ; son-of-a-bitch ; spac ; spic ; spick ; splooge ; splooge moose ; spooge ; spook ; spunk ; strapon ; strappado ; strip club ; style doggy ; suckass ; suicide girls ; sultry women ; swinger ; t1tt1e5 ; t1tties ; tainted love ; tard ; taste my ; tea bagging ; teets ; teez ; testical ; testicle ; threesome ; throating ; thundercunt ; tied up ; tight white ; tit ; titfuck ; tits ; titt ; tittie5 ; tittiefucker ; titties ; titty ; tittyfuck ; tittywank ; titwank ; tongue in a ; topless ; tosser ; towelhead ; tranny ; tribadism ; tub girl ; tubgirl ; turd ; tushy ; tw4t ; twat ; twathead ; twatlips ; twats ; twatty ; twatwaffle ; twink ; twinkie ; two girls one cup ; twunt ; twunter ; unclefucker ; upskirt ; urethra play ; urophilia ; v14gra ; v1gra ; va-j-j ; vag ; vagina ; vajayjay ; venus mound ; viagra ; vibrator ; violet wand ; vjayjay ; vorarephilia ; voyeur ; vulva ; w00se ; wang ; wank ; wanker ; wankjob ; wanky ; wet dream ; wetback ; white power ; whoar ; whore ; whorebag ; whoreface ; willies ; willy ; wop ; wrapping men ; wrinkled starfish ; xrated ; yellow showers ; yiffy ; zoophilia ; zubb ; a$$ ; a$$hole ; a55hole ; ahole ; anal impaler ; anal leakage ; analprobe ; ass fuck ; ass hole ; assbang ; assbanged ; assbangs ; assfaces ; assh0le ; beatch ; bimbo ; bitch tit ; bitched ; bloody hell ; bootee ; bootie ; bullturds ; bum boy ; butt fuck ; buttfuck ; buttmunch ; c-0-c-k ; c-o-c-k ; c-u-n-t ; c.0.c.k ; c.o.c.k. ; c.u.n.t ; caca ; cacafuego ; chi-chi man ; child-fucker ; clit licker ; cock sucker ; corksucker ; corp whore ; crackwhore ; dick head ; dick hole ; dick shy ; dick-ish ; dickdipper ; dickflipper ; dickheads ; dickish ; f-u-c-k ; f.u.c.k ; fist fuck ; fuck hole ; fuck puppet ; fuck trophy ; fuck yo mama ; fuck you ; fuck-ass ; fuck-bitch ; fuck-tard ; fuckedup ; fuckmeat ; fucknugget ; fucktoy ; fuq ; gassy ass ; h0m0 ; h0mo ; ham flap ; he-she ; hircismus ; hom0 ; hoor ; jackasses ; jackhole ; moo foo ; naked ; p.u.s.s.y. ; piss off ; piss-off ; rubbish ; s-o-b ; s0b ; shit ass ; shit fucker ; shiteater ; son of a bitch ; son of a whore ; two fingers ; wh0re ; wh0reface ]==true;]

$onlyIf[$hasRoles[$guildID;$authorID;1065286266544988222]==false;]
$onlyIf[$hasPerms[$guildID;$authorID;admin]==false]
$onlyIf[$checkContains[$channelID;780035944597946388;847961218446655528;780037915464040450;780037805400653864;796464028154855435]==false;]
$onlyIf[$guildID!=;]

`
})

*/
//automod ======================================================
/*
bot.command({
name: "$alwaysExecute",
$if: "v4",
code: `
$setUserVar[warncount;$sum[$getUserVar[warncount;$authorID];1];$authorID]

<:OPN_roger_whatdisbehaviour:916274589347246140> **|** Ahh! That's pretty odd. **Plz change that behaviour** \` Strike $sum[$getUserVar[warncount;$authorID];1] \`

$channelSendMessage[933746983682834442;💥 **$username** was warned for automod Violation. \` Warn Count : $sum[$getUserVar[warncount;$authorID];1] \`]

$if[$modulo[$sum[$getUserVar[warncount;$authorID];1];2]==0]
$color[1;ff8888]
$attachment[https://cdn.discordapp.com/attachments/866932984996429835/1004291456640487466/VivaCut_video_1626707682842.mp4;thatsprettyodd.mp4]
$title[1;$username got muted for $divide[$sum[$getUserVar[warncount;$authorID];1];10] hours]
$description[1;You have reached the warn strike of $sum[$getUserVar[warncount;$authorID];1] warnings.
[Visit this webpage and scroll down to discord embed send messages.\](https://jharajat.com.np) Note that the webhooks are ban-able too.]

$addButton[1;Invade Timeout;5;https://jharajat.com.np;no;]


$timeoutMember[$guildID;$authorID;$multi[$sum[$getUserVar[warncount;$authorID];1];360];no;Warn Count reached $sum[$getUserVar[warncount;$authorID];1]]
$endif

$reply[$messageID;yes]

$onlyIf[$checkContains[ $toLowercase[$message] ; randi ; radi ; rando ; rada ban ; chikne ; machikne ; lado ; puti ; madarchod ; bhosdike ; gandu ; kando ; condo ; gaand ; ckne ; rand ; bhosda, bitch ; nigga ; nigg ; nig ; nigs ; niggs ; dick ; dick ; dickhead ; pussy ; pussy face ; pussyface ; cunt ; mother fucker ; motherfucker ; mother fuker ; motherfuker ; fucktard ; fucking ; fucked ; cock sucker ; cocksucker ; cock ,blowjob ; blow job ; handjob ; hand job ; cunnilingual ; anal ; son of a bitch ; twat ; ballsack ; suck my balls ; lick my balls ; balls ; bitcher ; bitches ; bitchez ; bitchin ; bitching ; bitchslap ; bitchy ; bondage ; boner ; boob ; boobies ; boobs ; bootycall ; breastjob ; butt-bang ; buttface ; buttfuck ; butt-fuck ; buttfucker ; butt-fucker ; buttfuckers ; butt-fuckers ; butthead ; buttman ; buttmunch ; buttmuncher ; buttpirate ; buttplug ; condom ; cockqueen, cockrider ; cocksman ; cocksmith ; cocksmoker ; cocksucer ; cocksuck ; cocksucked  ; cocksucker ; cocksucking ; cocktease ; cocky ; creampie ; cream-pie ; crackwhore ; crack-whore ; cum ; cumbubble ; cumfest ; cumjockey ; cumm ; cummer ; cumming ; cumshot ; cunilingus ; cunillingus ; cunn ; cunnilingus ; cunntt ; cunt ,cunteyed ; cuntfuck ; cuntfucker ; cuntlick  ; cuntlicker  ; cuntlicking  ; cuntsucker ; cybersex ; deepthroat ; deapthroat ; dickbrain ; dickforbrains ; dickhead ; dickless ; dicklick ; dicklicker ; dickman ; dickwad ; dickweed ; dildo ; doggiestyle ; doggystyle ; dong ; dumbass ; dumbbitch ; dumbfuck ; easyslut ; eatballs ; erection ; fag ; fagging ; faggot ; fagot ; fatass ; fatfuck ; fatfucker ; fatso ; fckcum ; fuckable ; fuckbag ; fuckbuddy ; fuckedup ; fucker ; fuckers ; fuckface ; fuckfest ; fuckfreak ; fuckfriend ; fuckhead ; fuckher ; fuckin ; fuckina ; fucking ; fuckingbitch ; fuckinnuts ; fuckinright ; fuckit ; fuckknob ; fuckmehard ; fuckmonkey ; fuckpig ; fucktard ; fuckwhore ; fudgepacker ; gangbang ; gangbanged ; gangbanger ; gaymuthafuckinwhore ; gaysex ; headfuck ; hooker ; horny ; hookers ; hooters ; hore ; incest ; jackass ; jackoff ; jackshit ; jerkoff ; kissass ; kickass ; kock ; kondum ; kondom ; kum ; kumbubble ; kumbullbe ; kummer ; kumming ; kums ; kunilingus ; kunnilingus ; kunt ; lingerie ; livesex ; lovejuice ; mastabate ; mastabater ; masterbate ; masterblaster ; mastrabator ; masturbate ; masturbating ; meatbeatter ; mothafuck ; mothafucka ; mothafuckaz ; mothafucked  ; mothafucker ; mothafuckin ; mothafucking ; mothafuckings ; motherfuck ; motherfucked ; motherfucker ; motherfucking ; motherfucking ; motherfuckings ; nastybitch ; nastyslut ; nastywhore ; necro ; negro ; nigger ; negroes ; niger ; niggah ; niggaz ; niqqa ; nutfucker ; nymph ; orgasim  ; orgasm  ; orgies ; orgy ; peehole, pee-pee ; peepshow ; peepshpw ; peni5 ; penile ; penis ; penises ; phonesex ; phuk ; phuked ; phuking ; phukked ; phukking ; phungky ; phuq ; pi55 ; porn ; pornflick ; pornking ; porno ; pornography ; pornprincess ; prostitute ; protestant ; pu55i ; pu55y ; pube ; pubic ; pubiclice ; puss ; pussie ; pussyeater ; pussyfucker ; pussylicker ; pussylips ; pussylover ;  pussypounder ; pusy ; randy ; sexed ; sexfarm ; sexhound ; sexhouse ; sexing ; sexkitten ; sexpot ; sexslave ; sextogo ; sextoy ; sextoys ; sexwhore ; shitface ; shitfaced ; shitfit ; shitforbrains ; shitfuck ; shitfucker ; slut ; sluts ; slutt ; slutting ; slutty ; slutwear ; slutwhore ; stupidfuck ; stupidfucker ; suck ; suckdick ; sucker ; suckme ; suckmyass ; suckmydick ; suckmytit ; suckoff ; testicle ; testicles ; thirdleg ; threesome ; titbitnipply ; titfuck ; titfucker ; titfuckin ; titjob ; titlicker ; titlover ; tits ; tit ; tittie ; titties ; titty ; unfuckable ; upthebutt ; vibrater ; vibrator ; wank ; wanker ; wanking ; whore ; whorefucker ; whorehouse ]==true;]

$onlyIf[$message[1]!=\.;]
$onlyIf[$hasPerms[$guildID;$authorID;admin;managemessages]==false]
$onlyIf[$checkContains[$channelID;780035944597946388;847961218446655528;780037915464040450;780037805400653864;796464028154855435]==false;]

$onlyIf[$guildID!=;]

`
})
*/
/*
bot.command({
name: "strikes",
code: `
$title[1;Automod Warns LeaderBoard]
$description[1;$userLeaderboard[$guildID;warncount;asc;> {top}. **{username} :  [{value}\](https://instagram.com/rajat_cj/)** strikes.;10;1]
> ** **
> $getLeaderboardInfo[warncount;$authorID;user;top]. **$getLeaderboardInfo[warncount;$authorID;user;name] : [$getLeaderboardInfo[warncount;$authorID;user;value]\](https://thenamastenepal.com/)** strikes. (YOU)]
$color[1;#F81515]
$onlyIf[$guildID!=;]
  `
})

*/





//botDM ======================================================
bot.command({
name: "$alwaysExecute",
executeAt: "dm",
$if: "old",
code: `
    $if[$messageAttachment!=]
    	$attachment[$messageAttachment;$messageAttachment]
    $endif

    $authorID
    $author[1;$username#$discriminator;$userAvatar[$authorID]]
    $thumbnail[1;$userAvatar[$authorID]]
    $description[1;$message]
    $useChannel[1064242016726306946]

    $onlyIf[$guildID==;]
  `
})
bot.command({
name: "$alwaysExecute",
$if: "old",
code: `

    $if[$messageAttachment!=]
        $attachment[$messageAttachment;$messageAttachment]
    $endif

    $if[$referenceMessageID!=]
        $message
        $channelSendMessage[$channelID;Sent to **$userTag[$getMessage[$channelID;$referenceMessageID;content]]**]
        $dm[$getMessage[$channelID;$referenceMessageID;content]]
    $else
        $sendDm[Sent to **$username[$message[2]]#$discriminator[$message[2]]**;754033245972201612]
        $replaceText[$replaceText[$message;$message[1];;1];$message[2];;1]
        $dm[$message[2]]
        $onlyIf[$message[1]==Send]
    $endif

    $onlyIf[$channelID==1064242016726306946;]
   
  `
})


//Command Handler loader



//msg snipe
/*
bot.updateCommand({
        channel: "782446718704812032", 
        code: `Message edited from $username in <#$channelUsed>:
$message
Old message: $oldMessage

 Code Breakdown
$message - The new message
$oldMessage - The message before it was edited (This function only works in this callback)
$username - The person who edited the message
$channelUsed - Where the person edited the message
`
})
*/


/*
bot.deletedCommand({
    channel: "1064239753635057717",
    code: `
$author[1;$userTag[$authorID] ($authorID);$userAvatar[$authorID]]
$description[1;$message
**Sent <t:$round[$divide[$sum[$divide[$messageID;4194304];1420070400000];1000]]:R> • Deleted <t:$round[$divide[$datestamp;1000]]:R>**]
$footer[Deleted in #$channelName[$channelUsed]]
$color[1;$userRoleColor[$findUser[$authorID;yes];$guildID]]
$setChannelVar[msglog;$authorID(&%$#@)$message(&%$#@)$round[$divide[$datestamp;1000]](&%$#@)$messageID;$channelUsed]
$onlyIf[$guildID==1049979398977241118;]

`
});


bot.command({
name: "snipe",
code: `
$author[1;$userTag[$splitText[1]] ($splitText[1]);$userAvatar[$splitText[1]]]
$description[1;$splitText[2] 
**Sent <t:$round[$divide[$sum[$divide[$splitText[4];4194304];1420070400000];1000]]:R> • Deleted <t:$splitText[3]:R>**]
$color[1;$userRoleColor[$findUser[$splitText[1];yes];$guildID]]

$textSplit[$getChannelVar[msglog;$channelID];(&%$#@)]

$onlyPerms[managemessages;:pensive: **ManageMessage** perm where?]
$onlyIf[$guildID==1049979398977241118;]
  `
});

*/


// normals ======================================================
bot.joinCommand({ 
    channel: "1064237658215284877", 
    code: `
    $author[1;Welcome to $guildName[$guildID];$guildIcon[$guildID]]
    $color[1;5863ef]
    <@$authorID>, unlock all channels from <id:browse> 👋
    $thumbnail[1;$userAvatar[$authorID]]
    $description[1;Namaste **$username[$authorID]**, welcome to the warmest Nepalese Community. We are now $membersCount members.]
    
    $addField[1;Created <t:$round[$divide[$creationDate[$authorID;ms];1000]]:R> • Joined <t:$round[$divide[$memberJoinedDate[$authorID;$guildID;ms];1000]]:R>;
    [About](https://discord.com/channels/1049979398977241118/1064238601069678652)** • **[Rules](https://discord.com/channels/1049979398977241118/1049985143483420743)** • <:HGP__esewa:1055919496868663437> __[Chat & Earn](https://discord.com/channels/1049979398977241118/1064251706214461582)__ • **[Ticket](https://discord.com/channels/1049979398977241118/1064830344026652682)]
    
    $footer[1;$if[$isUserDMEnabled[$authorID]==true;DM Enabled;DM Disabled] • $sum[$splitText[9];1] joins & $splitText[10] leaves today;$if[$isUserDMEnabled[$authorID]==true;https://cdn.discordapp.com/emojis/892004694157848616.webp;https://cdn.discordapp.com/emojis/892004694120103946.webp]]
    
    $setGuildVar[serverlog;$splitText[1]@$splitText[2]@$splitText[3]@$splitText[4]@$splitText[5]@$splitText[6]@$splitText[7]@$splitText[8]@$sum[$splitText[9];1]@$splitText[10];$guildID]
    
    $textSplit[$getGuildVar[serverlog;$guildID];@]
    
    $onlyIf[$guildID==1049979398977241118;]
    
    ` 
    })
    bot.leaveCommand({ 
            channel: "1064239753635057717", 
            code: `
    **:bangbang: $username** left the server!
    
            $setGuildVar[serverlog;$splitText[1]@$splitText[2]@$splitText[3]@$splitText[4]@$splitText[5]@$splitText[6]@$splitText[7]@$splitText[8]@$splitText[9]@$sum[$splitText[10];1];$guildID]
            $textSplit[$getGuildVar[serverlog;$guildID];@]
    $onlyIf[$guildID==1049979398977241118;]
      `
    })
/*
//chatbot ======================================================
bot.command({
name: "$alwaysExecute",
$if: "v4",
code: `
$reply


$httpRequest[https://translate-api.tk/translate?text=$uri[$message;encode]&lang=en;GET;{};translated.text]


$onlyIf[$authorID==732984391135133726;]
`
})
*/
//Command Handler loader
const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd,'./commands/') 
