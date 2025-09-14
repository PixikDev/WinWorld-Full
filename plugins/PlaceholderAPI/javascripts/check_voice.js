var placeholder = "%voicechat_installed%";
var voice = PlaceholderAPI.static.setPlaceholders(BukkitPlayer, placeholder);

var checkVoice = function (voice) {
  return voice === "true" ? " &a● " : " &c● ";
};

checkVoice(voice);