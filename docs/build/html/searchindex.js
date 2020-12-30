Search.setIndex({docnames:["homura","homura.metrics","homura.modules","homura.modules.functional","homura.nlp","homura.utils","homura.vision","homura.vision.data","homura.vision.models","homura.vision.transforms","index","modules"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["homura.rst","homura.metrics.rst","homura.modules.rst","homura.modules.functional.rst","homura.nlp.rst","homura.utils.rst","homura.vision.rst","homura.vision.data.rst","homura.vision.models.rst","homura.vision.transforms.rst","index.rst","modules.rst"],objects:{"":{homura:[0,0,0,"-"]},"homura.liblog":{disable_default_handler:[0,1,1,""],disable_propagation:[0,1,1,""],enable_default_handler:[0,1,1,""],enable_propagation:[0,1,1,""],get_logger:[0,1,1,""],get_verb_level:[0,1,1,""],log_once:[0,1,1,""],print_once:[0,1,1,""],set_file_handler:[0,1,1,""],set_verb_level:[0,1,1,""],tqdm:[0,1,1,""]},"homura.lr_scheduler":{CosineAnnealingWithWarmup:[0,1,1,""],ExponentialLR:[0,1,1,""],LambdaLR:[0,1,1,""],MultiStepLR:[0,1,1,""],ReduceLROnPlateau:[0,1,1,""],StepLR:[0,1,1,""]},"homura.metrics":{commons:[1,0,0,"-"],segmentation:[1,0,0,"-"]},"homura.metrics.commons":{accuracy:[1,1,1,""],classwise_accuracy:[1,1,1,""],confusion_matrix:[1,1,1,""],f1_score:[1,1,1,""],false_negative:[1,1,1,""],false_positive:[1,1,1,""],precision:[1,1,1,""],recall:[1,1,1,""],specificity:[1,1,1,""],true_negative:[1,1,1,""],true_positive:[1,1,1,""]},"homura.metrics.segmentation":{binary_as_multiclass:[1,1,1,""],classwise_iou:[1,1,1,""],mean_iou:[1,1,1,""],pixel_accuracy:[1,1,1,""]},"homura.modules":{attention:[2,0,0,"-"],discretization:[2,0,0,"-"],ema:[2,0,0,"-"],functional:[3,0,0,"-"]},"homura.modules.attention":{KeyValAttention:[2,2,1,""]},"homura.modules.attention.KeyValAttention":{forward:[2,3,1,""]},"homura.modules.discretization":{GumbelSigmoid:[2,2,1,""],SemanticHashing:[2,2,1,""],StraightThroughEstimator:[2,2,1,""]},"homura.modules.discretization.GumbelSigmoid":{forward:[2,3,1,""]},"homura.modules.discretization.SemanticHashing":{forward:[2,3,1,""]},"homura.modules.discretization.StraightThroughEstimator":{forward:[2,3,1,""]},"homura.modules.ema":{EMANet:[2,2,1,""],exponential_moving_average_:[2,1,1,""]},"homura.modules.ema.EMANet":{forward:[2,3,1,""]},"homura.modules.functional":{attention:[3,0,0,"-"],discretizations:[3,0,0,"-"],grad_approximation:[3,0,0,"-"],knn:[3,0,0,"-"],loss:[3,0,0,"-"]},"homura.modules.functional.attention":{kv_attention:[3,1,1,""]},"homura.modules.functional.discretizations":{gumbel_sigmoid:[3,1,1,""],semantic_hashing:[3,1,1,""],straight_through_estimator:[3,1,1,""]},"homura.modules.functional.grad_approximation":{custom_straight_through_estimator:[3,1,1,""]},"homura.modules.functional.knn":{faiss_knn:[3,1,1,""],k_nearest_neighbor:[3,1,1,""],torch_knn:[3,1,1,""]},"homura.modules.functional.loss":{cross_entropy_with_smoothing:[3,1,1,""],cross_entropy_with_softlabels:[3,1,1,""]},"homura.nlp":{transformer:[4,0,0,"-"]},"homura.nlp.transformer":{PositionalEncoding:[4,2,1,""],Transformer:[4,2,1,""],TransformerDecoder:[4,2,1,""],TransformerDecoderLayer:[4,2,1,""],TransformerEncoder:[4,2,1,""],TransformerEncoderLayer:[4,2,1,""]},"homura.nlp.transformer.PositionalEncoding":{forward:[4,3,1,""]},"homura.nlp.transformer.Transformer":{forward:[4,3,1,""],generate_square_subsequent_mask:[4,3,1,""]},"homura.nlp.transformer.TransformerDecoder":{forward:[4,3,1,""]},"homura.nlp.transformer.TransformerDecoderLayer":{forward:[4,3,1,""]},"homura.nlp.transformer.TransformerEncoder":{forward:[4,3,1,""]},"homura.nlp.transformer.TransformerEncoderLayer":{forward:[4,3,1,""]},"homura.optim":{Adam:[0,1,1,""],AdamW:[0,1,1,""],RMSprop:[0,1,1,""],SGD:[0,1,1,""]},"homura.register":{Registry:[0,2,1,""]},"homura.register.Registry":{available_registries:[0,3,1,""],catalogue:[0,3,1,""],help:[0,3,1,""],import_modules:[0,3,1,""],register:[0,3,1,""],register_from_dict:[0,3,1,""]},"homura.reporters":{ReporterList:[0,2,1,""],TQDMReporter:[0,2,1,""],TensorboardReporter:[0,2,1,""]},"homura.reporters.ReporterList":{add:[0,3,1,""],add_figure:[0,3,1,""],add_histogram:[0,3,1,""],add_image:[0,3,1,""],add_text:[0,3,1,""],add_value:[0,3,1,""],exit:[0,3,1,""],history:[0,3,1,""],report:[0,3,1,""],set_batch_size:[0,3,1,""]},"homura.reporters.TQDMReporter":{add_scalar:[0,3,1,""],add_scalars:[0,3,1,""],add_text:[0,3,1,""],flush:[0,3,1,""],set_iterator:[0,3,1,""]},"homura.reporters.TensorboardReporter":{add_audio:[0,3,1,""],add_figure:[0,3,1,""],add_histogram:[0,3,1,""],add_image:[0,3,1,""],add_scalar:[0,3,1,""],add_scalars:[0,3,1,""],add_text:[0,3,1,""]},"homura.trainers":{SupervisedTrainer:[0,2,1,""],TrainerBase:[0,2,1,""]},"homura.trainers.SupervisedTrainer":{iteration:[0,3,1,""],load_state_dict:[0,3,1,""],state_dict:[0,3,1,""]},"homura.trainers.TrainerBase":{data_preprocess:[0,3,1,""],epoch:[0,3,1,""],epoch_range:[0,3,1,""],exit:[0,3,1,""],history:[0,3,1,""],is_train:[0,3,1,""],iteration:[0,3,1,""],override_iteration:[0,3,1,""],run:[0,3,1,""],set_optimizer:[0,3,1,""],set_scheduler:[0,3,1,""],step:[0,3,1,""],test:[0,3,1,""],train:[0,3,1,""]},"homura.utils":{backends:[5,0,0,"-"],benchmarks:[5,0,0,"-"],containers:[5,0,0,"-"],distributed:[5,0,0,"-"],environment:[5,0,0,"-"],reproducibility:[5,0,0,"-"]},"homura.utils.backends":{torch_to_xp:[5,1,1,""],xp_to_torch:[5,1,1,""]},"homura.utils.benchmarks":{timeit:[5,1,1,""]},"homura.utils.containers":{StepDict:[5,2,1,""],TensorDataClass:[5,2,1,""],TensorTuple:[5,2,1,""],tensor_dataclass:[5,1,1,""]},"homura.utils.containers.StepDict":{load_state_dict:[5,3,1,""],state_dict:[5,3,1,""],step:[5,3,1,""],zero_grad:[5,3,1,""]},"homura.utils.containers.TensorDataClass":{to:[5,3,1,""]},"homura.utils.containers.TensorTuple":{to:[5,3,1,""]},"homura.utils.distributed":{distributed_print:[5,1,1,""],get_global_rank:[5,1,1,""],get_local_rank:[5,1,1,""],get_num_nodes:[5,1,1,""],get_world_size:[5,1,1,""],if_is_master:[5,1,1,""],init_distributed:[5,1,1,""],is_distributed:[5,1,1,""],is_distributed_available:[5,1,1,""],is_horovod_available:[5,1,1,""],is_master:[5,1,1,""]},"homura.utils.environment":{enable_accimage:[5,1,1,""],get_args:[5,1,1,""],get_environ:[5,1,1,""],get_git_hash:[5,1,1,""],is_accimage_available:[5,1,1,""],is_cupy_available:[5,1,1,""],is_faiss_available:[5,1,1,""]},"homura.utils.reproducibility":{set_deterministic:[5,1,1,""],set_seed:[5,1,1,""]},"homura.vision":{data:[7,0,0,"-"],models:[8,0,0,"-"],transforms:[9,0,0,"-"]},"homura.vision.data":{datasets:[7,0,0,"-"],prefetcher:[7,0,0,"-"],statistics:[7,0,0,"-"],utils:[7,0,0,"-"]},"homura.vision.data.datasets":{ExtraSVHN:[7,2,1,""],ImageNet:[7,2,1,""],OriginalSVHN:[7,2,1,""],VisionSet:[7,2,1,""],fast_collate:[7,1,1,""]},"homura.vision.data.datasets.VisionSet":{collate_fn:[7,4,1,""],default_norm:[7,4,1,""],default_test_da:[7,4,1,""],default_train_da:[7,4,1,""],get_dataloader:[7,3,1,""],get_dataset:[7,3,1,""],num_classes:[7,4,1,""],root:[7,4,1,""],tv_class:[7,4,1,""]},"homura.vision.data.prefetcher":{DataPrefetchWrapper:[7,2,1,""]},"homura.vision.data.statistics":{PerChannelStatistics:[7,2,1,""]},"homura.vision.data.statistics.PerChannelStatistics":{estimated:[7,3,1,""],from_batch:[7,3,1,""],from_directory:[7,3,1,""],mean:[7,3,1,""],stdev:[7,3,1,""]},"homura.vision.models":{densenet:[8,0,0,"-"],resnet:[8,0,0,"-"],resnext:[8,0,0,"-"],unet:[8,0,0,"-"],wideresnet:[8,0,0,"-"]},"homura.vision.models.densenet":{CIFARDenseNet:[8,2,1,""],densenet100:[8,1,1,""],densenet40:[8,1,1,""]},"homura.vision.models.densenet.CIFARDenseNet":{forward:[8,3,1,""],initialize:[8,3,1,""]},"homura.vision.models.resnet":{PreActResNet:[8,2,1,""],ResNet:[8,2,1,""],preact_resnet110:[8,1,1,""],preact_resnet20:[8,1,1,""],preact_resnet32:[8,1,1,""],preact_resnet56:[8,1,1,""],resnet110:[8,1,1,""],resnet20:[8,1,1,""],resnet32:[8,1,1,""],resnet56:[8,1,1,""]},"homura.vision.models.resnet.PreActResNet":{forward:[8,3,1,""]},"homura.vision.models.resnet.ResNet":{forward:[8,3,1,""],initialize:[8,3,1,""]},"homura.vision.models.resnext":{CifarResNeXt:[8,2,1,""],ResNeXtBottleneck:[8,2,1,""],resnext29_32x4d:[8,1,1,""],resnext56_32x4d:[8,1,1,""]},"homura.vision.models.resnext.CifarResNeXt":{forward:[8,3,1,""]},"homura.vision.models.resnext.ResNeXtBottleneck":{expansion:[8,4,1,""],forward:[8,3,1,""]},"homura.vision.models.unet":{CustomUNet:[8,2,1,""],unet:[8,1,1,""]},"homura.vision.models.unet.CustomUNet":{forward:[8,3,1,""]},"homura.vision.models.wideresnet":{WideBasicModule:[8,2,1,""],WideResNet:[8,2,1,""],wrn28_10:[8,1,1,""],wrn28_2:[8,1,1,""]},"homura.vision.models.wideresnet.WideBasicModule":{forward:[8,3,1,""]},"homura.vision.models.wideresnet.WideResNet":{forward:[8,3,1,""],initialize:[8,3,1,""]},"homura.vision.transforms":{mixup:[9,0,0,"-"],segmentation:[9,0,0,"-"]},"homura.vision.transforms.mixup":{mixup:[9,1,1,""],partial_mixup:[9,1,1,""]},"homura.vision.transforms.segmentation":{CenterCrop:[9,2,1,""],Compose:[9,2,1,""],Normalize:[9,2,1,""],RandomCrop:[9,2,1,""],RandomHorizontalFlip:[9,2,1,""],RandomResize:[9,2,1,""],ToTensor:[9,2,1,""],pad_if_smaller:[9,1,1,""]},homura:{liblog:[0,0,0,"-"],lr_scheduler:[0,0,0,"-"],metrics:[1,0,0,"-"],modules:[2,0,0,"-"],nlp:[4,0,0,"-"],optim:[0,0,0,"-"],register:[0,0,0,"-"],reporters:[0,0,0,"-"],trainers:[0,0,0,"-"],utils:[5,0,0,"-"],vision:[6,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:attribute"},terms:{"0000":3,"000021u":5,"0001":0,"001":0,"04805":4,"05431":8,"0689":3,"0918":3,"100":[5,7],"10000":4,"1024":8,"120":0,"128":8,"1611":8,"1620":3,"1810":4,"2016":8,"2017":[4,8],"2019":5,"2020":4,"2048":4,"256":8,"3515":3,"3575":3,"5000":4,"512":[4,8],"6000":4,"6010":4,"6598":3,"7717":3,"8246":3,"999":0,"abstract":[0,7],"class":[0,1,2,3,4,5,7,8,9],"default":[0,4,5,7],"float":[0,1,2,3,4,8,9],"function":[0,2,4,5,8],"int":[0,3,4,5,7,8,9],"long":1,"return":[0,1,2,3,4,5,7,8,9],"static":[0,4],"true":[0,1,2,3,4,7],"void":5,"while":[2,4,8],AND:8,BUT:8,FOR:8,For:[7,8],NOT:8,Not:7,THE:8,The:[4,8],These:5,USE:8,Use:7,Useful:5,WITH:8,__slots__:5,_key_padding_mask:4,_mask:4,_mixin:0,_print_if_mast:5,_reporterbas:0,_type:5,abl:4,about:[4,5],abov:8,abs:[4,8],absolut:4,accept:0,accuraci:1,action:8,activ:[4,5],adam:[0,5],adamw:0,add:0,add_audio:0,add_figur:0,add_histogram:0,add_imag:0,add_scalar:0,add_text:0,add_valu:0,added:4,addit:4,addition:3,additive_mask:[2,3],advanc:4,after:[0,7],afterward:[2,8],agnost:5,aidan:4,all:[2,4,5,8],allow:4,almost:0,alpha:0,alreadi:0,although:[2,8],amp:0,amsgrad:0,ani:[0,5,8],anyth:0,appli:[2,4],applic:4,architectur:4,arg:[0,4,5],aris:8,arrai:5,arxiv:[4,8],ashish:4,associ:8,assum:5,attend:4,attent:[0,4,11],attn:4,attribut:4,audio:0,augment:7,author:8,automat:7,avail:[4,7],available_registri:0,averag:[0,2],backend:[0,3,11],backward:7,base:[0,2,4,5,7,8,9],base_width:8,baseclass:0,basic:7,batch:[0,4,7],batch_siz:[0,7],becaus:5,befor:7,benchmark:[0,11],bert:4,beta:0,beyond:9,bin:0,binary_as_multiclass:1,blob:8,block:8,bn_size:8,bool:[0,2,3,5,7],booltensor:4,bottleneck:8,build:4,bx1xhxw:1,bxcx:1,bxcxhxw:1,bxhxw:1,by_rank:5,bytetensor:4,cach:7,calcul:1,call:[2,8],callabl:[0,5,7],callback:0,can:[0,3,4,5,7],cardin:8,care:[2,8],catalogu:0,center:0,centercrop:9,channel:[7,8],charg:8,check:[0,5],cifar:8,cifardensenet:8,cifarresnext:8,claim:8,classif:[0,8],classmethod:0,classwise_accuraci:1,classwise_i:1,cls:5,cm_to_miou:0,code:4,collate_fn:7,com:[4,8],common:[0,11],compact:8,compon:4,compos:9,comput:[2,8],condit:8,config:8,confus:1,confusion_matrix:[0,1],connect:8,contain:[0,11],content:11,context:5,contract:8,convert:[1,5],cooldown:0,copi:8,copyright:8,correspond:4,cos:4,cosin:4,cosineannealingwithwarmup:0,creat:5,cross_entropy_with_smooth:3,cross_entropy_with_softlabel:3,cuda:5,cupi:5,custom:4,custom_decod:4,custom_encod:4,custom_straight_through_estim:3,customiz:4,customunet:8,cxc:1,d_model:4,damag:8,dampen:0,data:[0,6,8],data_load:0,data_parallel:0,data_preprocess:0,dataclass:5,dataload:7,dataprefetchwrapp:7,dataset:[0,6,8],deal:8,debug:0,decai:2,decod:4,decoder_lay:4,decor:5,deeplearningexampl:7,def:[0,5],defalt:4,default_norm:7,default_test_da:7,default_train_da:7,defin:[2,8],dens:8,densenet100:8,densenet40:8,densenet:[0,6],depth:8,detach:0,detail:[0,2],determinist:5,devic:[0,5],dict:[0,5],dictionari:5,differ:4,dim:[3,4],dim_feedforward:4,dim_model:4,dimens:[1,4],disable_default_handl:0,disable_distributed_print:5,disable_propag:0,discret:[0,11],discrimin:5,distanc:3,distribut:[0,7,8,11],distributed_print:5,division:8,do_some_random_th:5,doc:4,document:[8,10],doe:5,dong:8,doubl:7,download:7,downsampl:8,drop:7,drop_last:7,dropout:[4,8],dropout_prob:[2,3],dropout_r:8,dtype:5,due:4,dure:[4,7],each:8,easi:5,easili:5,element:4,ema:[0,11],emanet:2,emb:4,embed:4,empir:9,enable_accimag:5,enable_default_handl:0,enable_propag:0,encod:4,encoder_lay:4,end:5,ensur:4,environ:[0,11],epoch:[0,7],epoch_rang:0,eps:0,equal:0,equival:5,estim:[3,7],eta_min:0,evalu:[0,2],event:8,everi:[2,8],everyth:5,exampl:[4,7],exit:0,expans:8,expect:[0,1,4,5],exponenti:2,exponential_moving_average_:2,exponentiallr:0,express:8,extens:5,extrasvhn:7,f1_score:1,facebook:8,facebookresearch:8,factor:[0,7,8],faiss:3,faiss_knn:3,fals:[0,1,2,3,4,5,7,8],false_neg:1,false_posit:1,fast:10,fast_col:7,featur:4,fed:4,feedforward:4,figur:0,file:[5,8],fill:[4,9],fit:8,fix:5,flip_prob:9,floattensor:4,flush:0,folder:7,follow:8,foo:0,formatt:0,former:[2,8],forward:[2,4,8],free:8,frequenc:4,from:[4,7,8],from_batch:7,from_directori:7,full:[4,7],func:[0,5],furnish:8,gamma:[0,9],gao:8,gelu:4,gener:[4,5],generate_square_subsequent_mask:4,generator_opt:5,get:[5,7],get_arg:5,get_dataload:7,get_dataset:7,get_environ:5,get_git_hash:5,get_global_rank:5,get_local_rank:5,get_logg:0,get_num_nod:5,get_verb_level:0,get_world_s:5,github:[4,8],given:[0,2,5],global:5,gomez:4,gpu:[3,5],grad_approxim:[0,2],grant:8,growth:8,growth_rat:8,gumbel:3,gumbel_sigmoid:[2,3],gumbelsigmoid:2,handl:[5,7],hash:3,have:[4,5],head:4,help:0,helper:5,here:4,herebi:8,histogram:0,histori:0,holder:8,homura:10,hook:[2,8],horovod:5,howev:5,http:[4,8],idx:4,if_is_mast:5,ignor:[2,4,8],illia:4,imag:[0,7,9],imagefold:7,imagenet:[7,8],img:9,img_tensor:7,implement:[4,8],impli:8,import_modul:0,in_plan:8,includ:8,incom:4,index:10,indic:[3,9],inf:4,info:[0,5],inform:[4,5],init_channel:8,init_distribut:5,init_method:5,init_process_group:5,initi:[5,8],inject:4,inner_product:3,inplac:2,inplan:8,input:[0,1,2,3,4,5,8,9],input_backward:3,input_channel:8,input_forward:3,instanc:[2,4,8],instead:[2,3,8],int32:5,intend:5,intermedi:4,iou:1,is_accimage_avail:5,is_averag:0,is_cupy_avail:5,is_distribut:5,is_distributed_avail:5,is_faiss_avail:5,is_horovod_avail:5,is_mast:5,is_train:[0,3],item:0,iter:[0,5],its:4,jakob:4,jansen_shannon:3,jittabl:3,jone:4,jxk:3,jxm:3,k_nearest_neighbor:3,kaiser:4,kei:[0,2,3,4],keyvalattent:2,kind:8,knn:[0,2],kv_attent:[2,3],kwarg:[0,2,5,8],kxm:3,lambdalr:0,languag:4,larger:5,last:[4,7],last_epoch:0,latter:[2,8],layer:[4,8],length:4,level:0,liabil:8,liabl:8,liblog:11,librari:10,licens:8,like:0,limit:[5,8],linf:3,list:[0,5,7],liuzhuang13:8,llion:4,load_state_dict:[0,5],loader:7,local:5,log:0,log_fil:0,log_onc:0,logger:0,logit:1,longtensor:1,loop:0,loss:[0,2,5],loss_f:0,lr_lambda:0,lr_schedul:[5,11],lua:8,lukasz:4,made:4,mai:4,make:5,map:0,mask:[2,3,4],master:[4,5,8],matplotlib:0,matrix:1,max:4,max_len:4,max_siz:9,mean:[1,3,7,9],mean_iou:1,memori:[4,7],memory_format:7,memory_key_padding_mask:4,memory_mask:4,merchant:8,merg:8,messag:[0,5],method:0,metric:[0,10,11],metric_:3,mileston:0,min:0,min_lr:0,min_siz:9,minim:9,miou:0,mit:8,mixup:[0,6],mode:0,model:[0,2,4,6],model_registri:0,model_registry2:0,modifi:[4,8],modul:[10,11],momentum:[0,2],more:4,move:[2,5],multi:4,multiheadattent:4,multipl:8,multipli:0,multisteplr:0,n_size:8,name:[0,3,5],name_to_func:0,ncol:0,ndarrai:5,nearest:3,need:[2,4,7,8],neg:1,neighbor:3,nesterov:0,network:[1,4],neural:4,new_iter:0,nhead:4,niki:4,nlp:[0,10,11],no_sync:0,noam:4,node:5,non:[4,7],non_training_bs_factor:7,none:[0,2,3,4,5,7,8,9],nonetyp:0,noninfring:8,norm:[4,7],normal:[0,4,7,9],note:[4,5],notic:8,num_class:[7,8],num_decoder_lay:4,num_encoder_lay:4,num_head:4,num_it:5,num_kei:3,num_lay:[4,8],num_neighbor:3,num_queri:3,num_sampl:7,num_work:7,number:[4,5,7,8],numpi:5,nvidia:7,object:[0,5,7,9],obtain:8,onc:0,one:[2,8],onli:[0,5],oper:5,optim:[5,8,11],option:[0,1,2,3,4,5,7,9],org:[4,8],origin:2,originalsvhn:7,other:[5,8],otherwis:8,out:[4,8],output:[0,1,2,4,8],overrid:0,overridden:[2,8],override_iter:0,packag:[10,11],package_nam:0,pad:8,pad_if_smal:9,page:[4,10],paper:[4,8],param:[1,7],paramet:[0,1,2,3,4,5,7,8,9],parmar:4,partial_mixup:9,particular:8,pass:[0,2,4,8],path:7,pathlib:7,patienc:0,pdf:8,per:[4,5,7],perchannelstatist:7,perform:[2,8],permiss:8,permit:8,person:8,pil:[7,9],pin:7,pin_memori:7,pixel:1,pixel_accuraci:1,plane:8,polosukhin:4,port:4,portion:8,pos:4,pos_encod:4,posencod:4,posit:[1,4],positionalencod:4,post_default_train_da:7,post_norm_train_da:7,pre_default_train_da:7,pre_ln:4,preact_resnet110:8,preact_resnet20:8,preact_resnet32:8,preact_resnet56:8,preactresnet:8,precis:1,pred:5,predict:5,prefetch:[0,6],preln:4,prepos:4,preprocess:0,print:[0,5],print_mast:5,print_onc:0,process:[4,5],properti:[0,7],propos:8,prototyp:10,provid:[4,8],publish:8,purpos:8,pyplot:0,pytorch:[4,5],queri:[2,3],rand:4,randn:3,random:5,randomcrop:9,randomhorizontalflip:9,randomli:7,randomres:9,rang:0,rank:5,rate:8,readi:0,recal:1,recip:[2,8],recommend:3,reducelronplateau:0,reduct:[0,3,8],refer:[8,10],reflect:8,regist:[2,8,11],registe:0,register_from_dict:0,registri:0,registry_nam:5,rel:[0,4],relu:4,report:11,report_accuracy_topk:0,reporterlist:0,reproduc:[0,11],requir:[3,4,5,7],research:10,resnet110:8,resnet20:8,resnet32:8,resnet56:8,resnet:[0,6],resnext29_32x4d:8,resnext56_32x4d:8,resnext:[0,6],resnextbottleneck:8,restrict:8,result:0,return_num_class:7,right:8,risk:9,rmsprop:0,root:7,run:[0,2,8],same:[4,5],save_dir:0,scale:[2,3,7],schedul:0,score:[1,3],search:[3,10],see:[2,4],seed:5,segment:[0,6,11],self:[0,4,5],sell:8,semant:3,semantic_hash:3,semantichash:2,sep:5,sequenc:[4,7],set:[0,5,7],set_batch_s:0,set_determinist:5,set_file_handl:0,set_iter:0,set_optim:0,set_schedul:0,set_se:5,set_verb_level:0,sgd:0,shall:8,shape:[3,4],shazeer:4,should:[2,8],sigmoid:[2,3],silent:[2,8],simpl:[0,5],sin:4,sinc:[2,8],sine:4,singl:0,size:[4,5,7,9],smooth:3,softwar:8,some:4,someth:5,sourc:[0,1,2,3,4,5,7,8,9],specif:1,specifi:[4,8],split:7,squar:4,src:4,src_key_padding_mask:4,src_mask:4,stack:4,standard:4,start:7,start_epoch:7,state_dict:[0,5],statedictmixin:0,statist:[0,6],std:[7,9],stdev:7,step:[0,5],step_siz:0,stepdict:5,steplr:0,store:5,str:[0,3,5,7],straight:3,straight_through_estim:3,straightthroughestim:2,stride:8,sub:4,subclass:[2,8],subject:8,sublicens:8,submodul:[6,11],subpackag:11,substanti:8,substitut:5,sum:[0,4],supervis:0,supervisedtrain:0,support:3,svhn:7,sync:0,system:4,t_max:0,take:[2,4,8],target:[0,1,3,4,9],task:9,temp:[2,3],tensor:[0,1,2,3,4,5,7,9],tensor_dataclass:5,tensorboardreport:0,tensordataclass:5,tensorflow:0,tensortupl:[0,5],test:[0,7],test_batch_s:7,test_da:7,test_load:7,test_set:7,test_siz:7,text:[0,4],tgt:4,tgt_key_padding_mask:4,tgt_mask:4,than:[4,5],them:[2,8],thi:[0,2,4,5,7,8],threshold:[0,1,2],threshold_mod:0,through:[3,4],time:7,timeit:5,token:4,tool:0,top_k:1,torch:[0,1,2,3,4,5,7,8,9],torch_knn:3,torch_to_xp:5,torchvis:[7,8],tort:8,total:5,total_epoch:0,total_iter:0,totensor:9,tqdm:0,tqdm_ncol:0,tqdmreport:0,track:[0,2],train:[0,2,3,5,7],train_da:7,train_load:[0,7],train_set:7,train_siz:7,trainer:11,trainerbas:0,transform:[0,6,7,11],transformer_decod:4,transformer_encod:4,transformer_model:4,transformerdecod:4,transformerdecoderlay:4,transformerencod:4,transformerencoderlay:4,transit:8,tree:4,true_neg:1,true_posit:1,tupl:[0,2,3,5,7,9],turn:4,tv_class:7,two:4,type:[0,1,2,3,4,5,7,8,9],unchang:4,unet:[0,6],union:0,uniqu:0,unmask:4,updat:2,update_buff:2,update_iter:0,use:[3,4,5,8],use_amp:0,use_cuda_nonblock:0,use_cudnn_benchmark:0,use_horovod:5,use_prefetch:7,use_sync_bn:0,used:[0,4,5,7],useful:5,user:[3,4],using:[3,4],uszkoreit:4,util:[0,6,10,11],val_interv:0,val_load:[0,7],val_set:7,val_siz:7,valid:7,valu:[0,2,3,4,7],vaswani:4,verb:0,verbos:0,version:0,vision:[0,10,11],visiondataset:7,visionset:7,wai:4,warmup_epoch:0,warmup_it:5,warranti:8,weight:[2,4],weight_decai:[0,2],welcom:10,when:0,where:4,whether:8,which:8,whom:8,whose:3,widebasicmodul:8,widen_factor:8,wideresnet:[0,6],wise:1,within:[2,8],without:8,word:4,word_language_model:4,worker:7,world:5,wrap:5,write:5,wrn28_10:8,wrn28_2:8,x_cuda:5,x_int:5,xiong:4,xp_to_torch:5,xuanyi:8,you:[0,4],your_model:0,your_model_inst:0,yourtensorclass:5,yourtrain:0,zero:4,zero_grad:5,zero_init_residu:8},titles:["homura package","homura.metrics package","homura.modules package","homura.modules.functional package","homura.nlp package","homura.utils package","homura.vision package","homura.vision.data package","homura.vision.models package","homura.vision.transforms package","Indices and tables","homura"],titleterms:{"function":3,attent:[2,3],backend:5,benchmark:5,common:1,contain:5,content:[0,1,2,3,4,5,6,7,8,9],data:7,dataset:7,densenet:8,discret:[2,3],distribut:5,ema:2,environ:5,grad_approxim:3,homura:[0,1,2,3,4,5,6,7,8,9,11],indic:10,knn:3,liblog:0,loss:3,lr_schedul:0,metric:1,mixup:9,model:8,modul:[0,1,2,3,4,5,6,7,8,9],nlp:4,optim:0,packag:[0,1,2,3,4,5,6,7,8,9],prefetch:7,regist:0,report:0,reproduc:5,resnet:8,resnext:8,segment:[1,9],statist:7,submodul:[0,1,2,3,4,5,7,8,9],subpackag:[0,2,6],tabl:10,trainer:0,transform:[4,9],unet:8,util:[5,7],vision:[6,7,8,9],wideresnet:8}})