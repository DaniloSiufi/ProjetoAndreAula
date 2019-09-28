
const config = {
    apiKey: "Api",
    authDomain: "projeto.firebaseapp.com",
    databaseURL: "https://projeto.firebaseio.com/",
    projectId: "projeto",
}

firebase.initializeApp(config)

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('/static', express.static('public'));

app.get("/",function(req,res){
    res.render("index.ejs");
})

app.post("/register",function(req,res){
    
})

app.post("/login",function(req,res){
   
})

app.listen(3000, function(){
    console.log(`[ Server ] rodando na porta 3000`)
})