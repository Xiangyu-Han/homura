Search.setIndex({docnames:["homura","homura.metrics","homura.modules","homura.utils","homura.utils.reporter","homura.vision","homura.vision.data","homura.vision.metrics","homura.vision.models","homura.vision.models.cifar","homura.vision.models.segmentation","homura.vision.transforms","index","modules"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:55},filenames:["homura.rst","homura.metrics.rst","homura.modules.rst","homura.utils.rst","homura.utils.reporter.rst","homura.vision.rst","homura.vision.data.rst","homura.vision.metrics.rst","homura.vision.models.rst","homura.vision.models.cifar.rst","homura.vision.models.segmentation.rst","homura.vision.transforms.rst","index.rst","modules.rst"],objects:{"":{homura:[0,0,0,"-"]},"homura.debug":{module_debugger:[0,1,1,""]},"homura.liblog":{disable_default_handler:[0,1,1,""],enable_default_handler:[0,1,1,""],get_logger:[0,1,1,""],get_verb_level:[0,1,1,""],set_file_handler:[0,1,1,""],set_verb_level:[0,1,1,""]},"homura.lr_scheduler":{CosineAnnealingLR:[0,2,1,""],ExponentialLR:[0,2,1,""],LRScheduler:[0,2,1,""],LambdaLR:[0,2,1,""],MultiStepLR:[0,2,1,""],ReduceLROnPlateau:[0,2,1,""],StepLR:[0,2,1,""]},"homura.lr_scheduler.LRScheduler":{scheduler:[0,3,1,""],set_optimizer:[0,4,1,""]},"homura.metrics":{commons:[1,0,0,"-"]},"homura.metrics.commons":{accuracy:[1,1,1,""],f1_score:[1,1,1,""],false_negative:[1,1,1,""],false_positive:[1,1,1,""],precision:[1,1,1,""],recall:[1,1,1,""],specificity:[1,1,1,""],true_negative:[1,1,1,""],true_positive:[1,1,1,""]},"homura.modules":{attention:[2,0,0,"-"],conditional_batchnorm:[2,0,0,"-"],straight_backprop:[2,0,0,"-"]},"homura.modules.attention":{KeyValAttention:[2,2,1,""]},"homura.modules.attention.KeyValAttention":{forward:[2,4,1,""]},"homura.modules.conditional_batchnorm":{CategoricalConditionalBatchNorm:[2,2,1,""]},"homura.modules.conditional_batchnorm.CategoricalConditionalBatchNorm":{forward:[2,4,1,""]},"homura.modules.straight_backprop":{straight_backprop:[2,1,1,""]},"homura.optim":{ASGD:[0,2,1,""],Adam:[0,2,1,""],Optimizer:[0,2,1,""],RMSProp:[0,2,1,""],SGD:[0,2,1,""]},"homura.optim.Optimizer":{optim:[0,3,1,""],set_model:[0,4,1,""]},"homura.utils":{callbacks:[3,0,0,"-"],containers:[3,0,0,"-"],exceptions:[3,0,0,"-"],inferencer:[3,0,0,"-"],reporter:[4,0,0,"-"],runner:[3,0,0,"-"],trainer:[3,0,0,"-"]},"homura.utils.callbacks":{AccuracyCallback:[3,2,1,""],Callback:[3,2,1,""],CallbackList:[3,2,1,""],LossCallback:[3,2,1,""],MetricCallback:[3,2,1,""],WeightSave:[3,2,1,""]},"homura.utils.callbacks.AccuracyCallback":{accuracy:[3,4,1,""]},"homura.utils.callbacks.Callback":{after_all:[3,4,1,""],after_epoch:[3,4,1,""],after_iteration:[3,4,1,""],before_all:[3,4,1,""],before_epoch:[3,4,1,""],before_iteration:[3,4,1,""],close:[3,4,1,""]},"homura.utils.callbacks.CallbackList":{after_all:[3,4,1,""],after_epoch:[3,4,1,""],after_iteration:[3,4,1,""],before_epoch:[3,4,1,""],before_iteration:[3,4,1,""],close:[3,4,1,""]},"homura.utils.callbacks.MetricCallback":{after_epoch:[3,4,1,""],after_iteration:[3,4,1,""],before_epoch:[3,4,1,""],before_iteration:[3,4,1,""]},"homura.utils.callbacks.WeightSave":{after_epoch:[3,4,1,""]},"homura.utils.containers":{Map:[3,2,1,""],TensorTuple:[3,2,1,""]},"homura.utils.containers.Map":{copy:[3,4,1,""],deepcopy:[3,4,1,""],keys:[3,4,1,""],to:[3,4,1,""],values:[3,4,1,""]},"homura.utils.containers.TensorTuple":{to:[3,4,1,""]},"homura.utils.exceptions":{ShapeError:[3,5,1,""]},"homura.utils.inferencer":{Inferencer:[3,2,1,""]},"homura.utils.inferencer.Inferencer":{iteration:[3,4,1,""],load:[3,4,1,""],mode:[3,3,1,""],override_iteration:[3,4,1,""],run:[3,4,1,""],test:[3,4,1,""],update_loss_f:[3,4,1,""]},"homura.utils.reporter":{callbacks:[4,0,0,"-"],wrapper:[4,0,0,"-"]},"homura.utils.reporter.callbacks":{LoggerReporter:[4,2,1,""],Reporter:[4,2,1,""],TQDMReporter:[4,2,1,""],TensorboardReporter:[4,2,1,""],VisdomReporter:[4,2,1,""]},"homura.utils.reporter.callbacks.Reporter":{add_memo:[4,4,1,""],after_epoch:[4,4,1,""],after_iteration:[4,4,1,""],before_epoch:[4,4,1,""],before_iteration:[4,4,1,""],close:[4,4,1,""],disable_report_images:[4,4,1,""],disable_report_params:[4,4,1,""],enable_report_images:[4,4,1,""],enable_report_params:[4,4,1,""],report_images:[4,4,1,""],report_params:[4,4,1,""]},"homura.utils.reporter.wrapper":{LoggerWrapper:[4,2,1,""],ReporterWrapper:[4,2,1,""],TQDMWrapper:[4,2,1,""],TensorBoardWrapper:[4,2,1,""],VisdomWrapper:[4,2,1,""]},"homura.utils.reporter.wrapper.LoggerWrapper":{add_histogram:[4,4,1,""],add_image:[4,4,1,""],add_images:[4,4,1,""],add_scalar:[4,4,1,""],add_scalars:[4,4,1,""],add_text:[4,4,1,""]},"homura.utils.reporter.wrapper.ReporterWrapper":{add_histogram:[4,4,1,""],add_image:[4,4,1,""],add_images:[4,4,1,""],add_scalar:[4,4,1,""],add_scalars:[4,4,1,""],add_text:[4,4,1,""],close:[4,4,1,""],save:[4,4,1,""]},"homura.utils.reporter.wrapper.TQDMWrapper":{add_histogram:[4,4,1,""],add_image:[4,4,1,""],add_images:[4,4,1,""],add_scalar:[4,4,1,""],add_scalars:[4,4,1,""],add_text:[4,4,1,""]},"homura.utils.reporter.wrapper.TensorBoardWrapper":{add_histogram:[4,4,1,""],add_image:[4,4,1,""],add_images:[4,4,1,""],add_scalar:[4,4,1,""],add_scalars:[4,4,1,""],add_text:[4,4,1,""],close:[4,4,1,""]},"homura.utils.reporter.wrapper.VisdomWrapper":{add_histogram:[4,4,1,""],add_image:[4,4,1,""],add_images:[4,4,1,""],add_scalar:[4,4,1,""],add_scalars:[4,4,1,""],add_text:[4,4,1,""],close:[4,4,1,""]},"homura.utils.runner":{Runner:[3,2,1,""]},"homura.utils.trainer":{DistributedSupervisedTrainer:[3,2,1,""],SupervisedTrainer:[3,2,1,""],Trainer:[3,3,1,""],TrainerBase:[3,2,1,""]},"homura.utils.trainer.SupervisedTrainer":{iteration:[3,4,1,""]},"homura.utils.trainer.TrainerBase":{is_train:[3,3,1,""],iteration:[3,4,1,""],override_iteration:[3,4,1,""],register_after_all:[3,4,1,""],register_after_epoch:[3,4,1,""],register_after_iteration:[3,4,1,""],register_before_all:[3,4,1,""],register_before_epoch:[3,4,1,""],register_before_iteration:[3,4,1,""],resume:[3,4,1,""],run:[3,4,1,""],test:[3,4,1,""],train:[3,4,1,""]},"homura.vision":{data:[6,0,0,"-"],metrics:[7,0,0,"-"],models:[8,0,0,"-"],transforms:[11,0,0,"-"]},"homura.vision.data":{folder:[6,0,0,"-"],loaders:[6,0,0,"-"],statistics:[6,0,0,"-"]},"homura.vision.data.folder":{ImageFolder:[6,2,1,""],LabelCorruptedImages:[6,2,1,""],find_classes:[6,1,1,""],has_allowed_extension:[6,1,1,""],make_dataset:[6,1,1,""]},"homura.vision.data.folder.ImageFolder":{IMG_EXTENSIONS:[6,3,1,""]},"homura.vision.data.folder.LabelCorruptedImages":{valset:[6,4,1,""]},"homura.vision.data.loaders":{cifar100_loaders:[6,1,1,""],cifar10_loaders:[6,1,1,""],imagenet_loaders:[6,1,1,""],mnist_loaders:[6,1,1,""]},"homura.vision.data.statistics":{PerChannelStatistics:[6,2,1,""]},"homura.vision.data.statistics.PerChannelStatistics":{estimated:[6,3,1,""],from_batch:[6,4,1,""],from_directory:[6,4,1,""],mean:[6,3,1,""],stdev:[6,3,1,""]},"homura.vision.metrics":{segmentation:[7,0,0,"-"]},"homura.vision.metrics.segmentation":{segmentation_metrics:[7,1,1,""]},"homura.vision.models":{cifar:[9,0,0,"-"],segmentation:[10,0,0,"-"]},"homura.vision.models.cifar":{densenet:[9,0,0,"-"],resnet:[9,0,0,"-"]},"homura.vision.models.cifar.densenet":{CIFARDenseNet:[9,2,1,""],cifar_densenet100:[9,1,1,""]},"homura.vision.models.cifar.densenet.CIFARDenseNet":{forward:[9,4,1,""],initialize:[9,4,1,""]},"homura.vision.models.cifar.resnet":{PreActResNet:[9,2,1,""],ResNet:[9,2,1,""],preact_resnet110:[9,1,1,""],preact_resnet20:[9,1,1,""],preact_resnet32:[9,1,1,""],preact_resnet56:[9,1,1,""],resnet110:[9,1,1,""],resnet20:[9,1,1,""],resnet32:[9,1,1,""],resnet56:[9,1,1,""]},"homura.vision.models.cifar.resnet.PreActResNet":{forward:[9,4,1,""]},"homura.vision.models.cifar.resnet.ResNet":{forward:[9,4,1,""],initialize:[9,4,1,""]},"homura.vision.models.segmentation":{msdnet:[10,0,0,"-"],unet:[10,0,0,"-"]},"homura.vision.models.segmentation.msdnet":{msdnet25:[10,1,1,""],msdnet50:[10,1,1,""]},"homura.vision.models.segmentation.unet":{unet:[10,1,1,""]},"homura.vision.transforms":{erase:[11,0,0,"-"]},"homura.vision.transforms.erase":{RandomErase:[11,2,1,""]},"homura.vision.transforms.erase.RandomErase":{min_ratio:[11,3,1,""]},homura:{debug:[0,0,0,"-"],environment:[0,0,0,"-"],liblog:[0,0,0,"-"],lr_scheduler:[0,0,0,"-"],metrics:[1,0,0,"-"],modules:[2,0,0,"-"],optim:[0,0,0,"-"],utils:[3,0,0,"-"],vision:[5,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","attribute","Python attribute"],"4":["py","method","Python method"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:attribute","4":"py:method","5":"py:exception"},terms:{"class":[0,2,3,4,6,9,11],"float":[2,3,6,11],"function":[2,9],"int":[0,3,4,6],"return":[2,3,7],"true":[2,3],"while":[2,9],_batchnorm:2,_dataset:6,abc:3,accuraci:[1,3],accuracycallback:3,adam:0,add_histogram:4,add_imag:4,add_memo:4,add_scalar:4,add_text:4,affin:2,after_al:3,after_epoch:[3,4],after_iter:[3,4],afterward:[2,9],alia:3,all:[0,2,9],alpha:0,although:[2,9],amsgrad:0,area_ratio:11,arg:3,asgd:0,aspect_ratio:11,attent:[0,12,13],backend:3,backward:0,base:[0,2,3,4,6,9,11],batch:6,batch_siz:6,batchnorm:2,before_al:3,before_epoch:[3,4],before_iter:[3,4],beta:0,blob:9,block:9,bmp:6,bn_size:9,bool:[2,3,6],bxhxw:7,bxnxhxw:7,calcul:[0,7],call:[2,9],callabl:[0,3],callback:[0,12,13],callbacklist:3,can:3,care:[2,9],categori:2,categoricalconditionalbatchnorm:2,center:0,cifar100:6,cifar100_load:6,cifar10:6,cifar10_load:6,cifar:[0,5,8],cifar_densenet100:9,cifardensenet:9,class_to_idx:6,close:[3,4],collect:3,com:9,common:[0,12,13],comput:[2,9],conditional_batchnorm:[0,12,13],connect:0,contain:[0,12,13],content:[12,13],cooldown:0,copi:3,correspond:7,cosineannealinglr:0,dampen:0,data:[0,3,4,5],data_augment:6,data_load:3,data_parallel:3,dataload:3,dataset:9,debug:[12,13],deepcopi:3,def:3,defin:[2,9],densenet:[0,5,8],devic:3,dict:[3,4,6,7],dim:2,disable_default_handl:0,disable_report_imag:4,disable_report_param:4,distribut:6,distributedsupervisedtrain:3,document:12,dropout_r:9,dropout_ratio:2,dure:3,enable_default_handl:0,enable_report_imag:4,enable_report_param:4,env:3,environ:[12,13],epoch:3,eps:[0,2],eras:[0,5],erase_prob:11,estim:6,eta_min:0,everi:[2,9],except:[0,12,13],exponentiallr:0,extens:6,f1_score:1,facebook:9,factor:0,fals:[0,2,3,6,9],false_neg:1,false_posit:1,file:6,find_class:6,folder:[0,5],force_download:6,formatt:0,former:[2,9],forward:[0,2,9],from:7,from_batch:6,from_directori:6,gamma:0,gao:9,get_logg:0,get_verb_level:0,github:9,given:3,growth_rat:9,has_allowed_extens:6,homura:12,hook:[2,9],http:9,idx:4,ignor:[2,9],image_tensor:4,imagefold:6,imagenet_load:6,img_extens:6,index:[4,12],infer:3,inferenc:[0,12,13],init_channel:9,init_method:3,initi:9,input:[0,1,2,3,9],input_channel:10,instanc:[2,9],instead:[2,9],intial:[0,5,8],is_train:3,iter:[3,4,6],jpeg:6,jpg:6,kei:[2,3,4],keyvalattent:2,kwarg:[0,3,4,9],labelcorruptedimag:6,lambd:0,lambdalr:0,last_epoch:0,latter:[2,9],level:0,liblog:[12,13],librari:12,like:3,liuzhuang13:9,load:3,loader:[0,5],log:[0,3],log_fil:0,logger:[3,4],loggerreport:4,loggerwrapp:4,loss:[0,3],loss_f:3,losscallback:3,lr_lambda:0,lr_schedul:[3,12,13],lrschedul:[0,3],lua:9,make_dataset:6,map:[3,4],mask:2,master:9,mean:[1,6],memo:4,method:3,metric:[0,3,5,12,13],metriccallback:3,mileston:0,min:0,min_lr:0,min_ratio:11,mnist:6,mnist_load:6,mode:[0,3],model:[0,3,4,5],modifi:2,modul:[12,13],module_debugg:0,momentum:[0,2],move:3,msdnet25:10,msdnet50:10,msdnet:[0,5,8],multisteplr:0,mutablemap:3,n_size:9,name:[0,3,4],nccl:3,need:[2,9],nesterov:0,network:7,new_iter:3,none:[0,2,3,4,6],num_class:[2,9,10],num_featur:2,num_lay:9,num_sampl:6,num_test_sampl:6,num_train_sampl:6,num_work:6,object:[0,3,4,6,11],on_memori:6,one:[2,9],optim:[3,12,13],optim_cl:0,option:[0,3],origin:2,output:[3,7],overrid:3,overridden:[2,9],override_iter:3,packag:[12,13],pad:9,page:12,param:[2,3,7],paramet:3,part:3,pass:[2,9],path:[3,6],pathlib:6,patienc:0,perchannelstatist:6,perform:[2,9],pgm:6,png:6,port:4,ppm:6,preact_resnet110:9,preact_resnet20:9,preact_resnet32:9,preact_resnet56:9,preactresnet:9,precis:1,propos:9,provid:3,queri:2,random_r:6,random_se:6,randomeras:11,recal:1,recip:[2,9],reducelronplateau:0,reduct:[1,9],reflect:9,regist:[2,9],register_after_al:3,register_after_epoch:3,register_after_iter:3,register_before_al:3,register_before_epoch:3,register_before_iter:3,rel:0,relu:2,replac:6,report:[0,3],report_freq:4,report_imag:4,report_param:4,reporterwrapp:4,research:12,resnet110:9,resnet20:9,resnet32:9,resnet56:9,resnet:[0,5,8],result:3,resum:3,rmsprop:0,root:6,run:[2,3,9],runner:[0,12,13],save:4,save_dir:4,save_freq:3,save_path:3,scale:2,schdlr_cl:0,schedul:[0,3],search:12,segment:[0,5,8],segmentation_metr:7,semant:7,sequenc:6,set:3,set_file_handl:0,set_model:0,set_optim:0,set_verb_level:0,sgd:0,shallow:3,shapeerror:3,should:[2,9],silent:[2,9],sinc:[2,9],sourc:[0,1,2,3,4,6,7,9,10,11],specif:1,statist:[0,5],stdev:6,step_siz:0,steplr:0,store:3,str:[0,3,4,6],straight_backprop:[0,12,13],straight_backprop_relu:2,subclass:[2,9],submodul:[5,8,12,13],subpackag:[12,13],supervisedtrain:3,t_max:0,take:[2,9],target:[0,1,7],tensor:[0,1,2,3,6,7],tensorboardreport:4,tensorboardwrapp:4,tensortupl:3,test:3,test_data:3,text:4,them:[2,9],thi:[2,9],threshold:0,threshold_mod:0,tif:6,torch:[0,1,2,3,6,7,9],tqdmreport:4,tqdmwrapper:4,track_running_stat:2,train:3,train_data:3,trainer:[0,12,13],trainerbas:3,transform:[0,5,6],true_neg:1,true_posit:1,tupl:[0,3,11],unet:[0,5,8],update_iter:3,update_loss_f:3,update_scheduler_by_epoch:3,use_apex_ddp:3,use_cuda_nonblock:3,use_cudnn_benchmark:3,use_sync_bn:3,used:3,user:3,util:[0,12,13],val_siz:6,valset:6,valu:[2,3],verb:3,verbos:0,view:3,visdomreport:4,visdomwrapp:4,vision:[0,12,13],vt_co:4,weight_decai:0,weightsav:3,welcom:12,wide_resnet:[0,5,8],within:[2,9],wrapper:[0,3],wrapper_arg:4,zero_init_residu:9},titles:["homura package","homura.metrics package","homura.modules package","homura.utils package","homura.utils.reporter package","homura.vision package","homura.vision.data package","homura.vision.metrics package","homura.vision.models package","homura.vision.models.cifar package","homura.vision.models.segmentation package","homura.vision.transforms package","Indices and tables","homura"],titleterms:{attent:2,callback:[3,4],cifar:9,common:1,conditional_batchnorm:2,contain:3,content:[0,1,2,3,4,5,6,7,8,9,10,11],data:6,debug:0,densenet:9,environ:0,eras:11,except:3,folder:6,homura:[0,1,2,3,4,5,6,7,8,9,10,11,13],indic:12,inferenc:3,intial:10,liblog:0,loader:6,lr_schedul:0,metric:[1,7],model:[8,9,10],modul:[0,1,2,3,4,5,6,7,8,9,10,11],msdnet:10,optim:0,packag:[0,1,2,3,4,5,6,7,8,9,10,11],report:4,resnet:9,runner:3,segment:[7,10],statist:6,straight_backprop:2,submodul:[0,1,2,3,4,6,7,9,10,11],subpackag:[0,3,5,8],tabl:12,trainer:3,transform:11,unet:10,util:[3,4],vision:[5,6,7,8,9,10,11],wide_resnet:9,wrapper:4}})