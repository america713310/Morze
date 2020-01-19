<template>
   <div class="container pt-0"> 
       <h2>Азбука Морзе</h2>
        <label for="exampleInputEmail1">{{Header}}</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" :placeholder="PlaceholderText" v-model="text">
            <small id="emailHelp" class="form-text text-muted"></small>
         <label for="exampleInputPassword1">Перевод</label>
            <h3>{{MorzeText()}}</h3>
        <button class="btn btn-outline-success mr-3" @click="isMorze = !isMorze">{{ BtnText }}</button>
   </div>
</template>

<script>
export default { 
  data () {
    return {
       text: "",
       isMorze: false,
       placeholder: ""
    }
  },
  methods: {
      MorzeText: function(){
        let _morzeMap = new Map();
        let _answer = "";
        _morzeMap.set([".-", "-...", ".--", "--.", "-..", ".", "...-", "--..", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", 
        ".-.", "...", "-", "..-", "..-.", "....", "-.-.", "---.", "----", "--.-", ".--.-.", "-.--", "-..-", "...-...", "..--", ".-.-"], 
        ['а', 'б', 'в', 'г', 'д', 'е', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я']);
        
        if (!this.isMorze) {
            for (let c of this.text) 
            {
                if (c === " ") _answer += "\xa0"; 
                for (let el of _morzeMap) 
                {
                    for (let i = 0; i < el[1].length; i++)
                    {
                        if (c.toLowerCase() == el[1][i]) 
                        _answer += el[0][i];
                    }
                } 
                _answer += " ";
            }
        }
        else 
        {
            for (let c of this.text.split("   ")) 
            {
                for (let t of c.split(" ")) 
                {
                    for (let el of _morzeMap) 
                    {
                        for (let i = 0; i < el[0].length; i++) 
                        {
                            if (t == el[0][i]) 
                            _answer += el[1][i];
                        }
                    }
                } 
            _answer += " ";
            }
        }
        return _answer;
        }
    },
    computed: {
        BtnText() {
            return this.isMorze ? 'Сменить' : 'Сменить'
        },
        PlaceholderText() {
            return this.isMorze ? '.--. .-. .. .-- . -   -- . -. .-.-   --.. --- .-- ..- -   ... .-- . - .-.. .- -. .-' : 'Привет, меня зовут Светлана'
        },
        Header() {
            return !this.isMorze ? 'Напишите что-нибудь' : 'Напишите что-нибудь на шрифте Морзе' 
        }
    }
}
</script>

<style>
    .imgContainer {
    float:left;
}
    .logo-image {
    height: 45px;
    width: 60px;
}
</style>
