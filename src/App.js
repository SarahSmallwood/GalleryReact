import React from 'react'
import './App.css';
import './contexts/ImageContext';
import SearchBar from './components/SearchBar';
import ImageContext from './contexts/ImageContext';
import HomePage from './components/HomePage';


const galleryImages = [
  {
    img: 'https://lh3.googleusercontent.com/pw/AIL4fc-c1iBvt6y6LUg5JBpT2j8Ymq9uLxP8i2YJkD_jIeyym5PQ59IwDlIv-6Pw2JkPdvqQj8m8fPPqOZv8bq3gosNzJ2fpQZQ7V9meVnrRo-J0NgDkjeZvF8Fl-suWt2gF6kU_50ySuhdE9EocAGVokl7_kRmoaZphi0Wo867kt9z7ZGgMTem9jn_aJ9WzVL4SE1JxopKZVCYGowI6FsbzRBzVTNKTDLpdy70VjZ3YuQFdW6FsfGrkfCrUFM6T33wK7m9zGKYDbuh7X_m7CHXDhl7i-sX5kpSAR2xduCxvz5i1w2p-jDwtLV1zlWDBCpYPWv6lcYwRTD-AyaZaJT1-Pp7r-H77xirxW9XsSpUIeqWhoHEYHpWriRKiI4pnT9ECgXIt5f_LZ1gYUhNVy0_BgkcnJSYGdHv1CA73-kICGUwxDBc5l99mbYcSf_tBA0AUvRjq0G_EY9N57FoPfYecozSn5PWYa4nckrRM8boBSvaE6JG8yWc2xSw7s7mlmp_fi2RXMV7MHKFpePEq27vW4M-DNk38oOH-tb2SfXIo_b7ATfyYFHzRsq6g132AP2sgFrUWIFBSpdv8RxfXN0Hjmz6yUPfhkcaV28-K1KhlEgEKqfmvhLtF1FpnnLUvTqmgDNCds4T3oM_HxApJr2t2OIKVK8TB63WWlUXB4DkwbT7adHuSLGnNx5PujWoxIFjgo8-52SHJyZ_qDSj2jMtlnP_IKVXt8mUySfyWhw54ZWYZlyBVfTro7L0SoaPYL30q9R6_vJibPrpGt7PIT0II1o3QOxQZ3aPKdr3j_Ml4z9VKx_gvU-wIlak3T2oBKe7eTF-teKCbz5T05cXoS2KGAfrMUXSnMrJz00HeLW2OYMPOBX0p7k-Z7oyD1rkaI3TvDm0c4QkldIWEgGlZddLH-w=w1032-h1375-s-no?authuser=0',
    name: "Spain",
    text: "Plaza de España, Sevilla",
},
{
    img: 'https://lh3.googleusercontent.com/pw/AIL4fc_ie8rFyDSASspUABQbz5YvWl4zWlswG8lPUpzPS2UPe4gR-7NyRWLm7X0xoo1_tA-qrOGMgVOYHLdnSv8_M8aUhRR47MvA7beTaX0uqphW9idVSlp23XZH2Ys1pjskXs4BjmJwEc647yGaoTnku4AdpUMO6VKUJTGeQQQ8zc87o8i6PS7efiSxMS454Fp4xPIo8EvX-EbmOI0bnr1Sto1D_uKzf7YBy7UgzeC8u3lxBBew_ky96QTEQashRwBi82oAniEpGJPOSGG6DFAE8UIY7RtsX5RI2olVIVWIjnPPgCJLbtN3TJ6ji7uzIGeCrFdMd_SUgic8uU7ndGmn4uBtuDT_jsqfkGcWTtuoxmKPCdfTCGIoi3YZnlPUZBY1bAUU6MUJz0A9jcgm-J7FP7wGQL3xXpjCnDrb4vOK6yhdDl4t6dYuaaYuwrbhObOttBb_qF5mrVKqNZ7Clku0MASzu0RrlfH0_GMZyFoqrxqkJ0KHZ_GPwYDjRXbKB4BlVS3Bq8wAlckuAfgC4hTjirbS24TuklKqXe52AtnvBh_iX_nfLhl5bFPhOc1Urbta5oj0y2ymIojOMKBklxcvoxotFe74i7ZiRx_KmckOo9J_XI19XswtxXPKC0uOvHCKuC-oxz8UcHZjjTJUPdcgEv8NqbkxlZ3KuRE9brPkzL8m7NdGH6HTWczzOox-dIGNEjrl4ZJNCj10KgVsUgs-asvJgiGgPLKZEOzuD__P9g8WeZ62kumFKNZc1WQjOw6tx8T5H59ijvAjluK8ZLrWXqxBSlNsLBLEzsNKscCcKSbZ5iGjgu0uOohYbCmJmeLqQYZdElxYcKw4eY2s-kRWVoh-BScjCQMazhc6mBaAlf7H5x3QOISwwWu576iYZzO7uO_t6YF2qQ0AyqRjr3rboA=w1440-h1082-s-no?authuser=0',
    name: "Thailand",
    text: "Khao Sok National Park",


},
{
    img: 'https://lh3.googleusercontent.com/pw/AIL4fc9hLEoJQMxtV6eDgGyHqpY_BFluuYnGBMl9YnwtCpUol6XR6arJHrvYT3UbLNaGwIaLtqMCDpveJpxvMZQHiScLALxoAuGrsu1b4Su0R88TPegZCiEJHzKjHTefmqSee6CrBB3Y7tV2VcEHYXnGbYTSxAEzjf0jOs7zTQuGmGG2tcLytoIDdCjfZ10rsFAY_4ULQOOLroCxa6JRGp6sVzsncj9x3D52PgcQyhnU9n6pIfnLbh07TCnL6pQvaUNKBIJ6rscR0MrU-qC1-3CNRk9NCk7Irmt2l4cCtYW9ASV9bPotShLvbbsGd6rxrPRLpQ6X4IPhsPkZ5bBpB1QzxtMYYSakzDkX9Qs1wV95EAv8zrBhSsnWEPpxgrJ0nkwdH80LP41Mq_ei0eRunfuMZYwnU_Mz_RU48J8-wpDf6yIwWzwc2IMEMBprMrkLD_38HATBbIi7pYkWKpakLOqvHoOcHxqltH5b3f1pHk5JZ7AfDCr_Cdbj7pNqT_vdkLtO8lYjJyZFsvlWZynfG_zMyemXFKnb7HnTyl6e8OIz_JilOa_NI6E2ZT7AKgaAdsAoVhdmArU7VDF8VCboOeTGoWPtxspkrap5sum4zcsXgG8AU82Pr5orXALPIK6eM7SPHjWBH3cGlaOH5GNWMWbVpypUdvERxcsUs_DjO8flPo89kQAXQQsZnQMlRB9SjVzvNTREhgCC_PXolM9llSHD25r_tmk4bowu-MCT-kWhHP-jdL9FhMRMPuHHWRfffhq3K0pMREXqTFMhmqTpfUuEJtvq3lz5D2W5MyaErofmmYY6p2R6WIbWm8MRDaKxyn74ostlTG6XpnUKskbb9wRe1HOwsV_MdikOKfNwHundOTSkXG1bva6sc-xamd6_IvBveXe0bFq1YZ8bVugaI6V87A=w1008-h1375-s-no?authuser=0',
    name: "Costa Rica",
    text: "Arenal Volcano Park, La Fortuna",

},
{
    img: 'https://lh3.googleusercontent.com/pw/AIL4fc-cyJyO099M6EFrwLlL9CfX36GT6RxhiAENJbWdwbFLhEZarli-b5Su6VhAxbHTX87FzunGugxe4sJKo-St8pxZMQshCuaX9RAqiaf5culpwFx_6o67_1M6CaCziCR2qrCqe77JNmzdiWBZGjPF6j5RohNtoENay_pqQ9fS56BP572EwOv53rkEYGk8nKDIy4mIoW8obOPkJ-CtfV29ZLOYXL7lszBvFxkWc8wUJvyO5FbQvSrgg5XQxiOj4BRBhz-3eS6meARtgKDcDGkYoWtS7K-3Nawm7SmF0erPKBnccgOqgTl2E0mVkW1HrMpYP2ngC5uEoVJmPiN3INpynbR2IER6vEDyXG_pmwolo3YPhGD3-Jk82LaCNv44E3erfYSesPL_cb1-EivhjhNLLXjX8FUr7Jc2OWtqRo2ejRtf5yxPi2T59YaPziEKlDchtSSwrUY7f-0dqGsjUSZ7GJ0BrOVAasz8SGr_bmw8xDPAUrFDwboMnwAruqwwJwZohrutZNJvCSdvudF-GgEXaITCVZC64MZ9JLVMJvgdlKNpQJhvhxkBZ1fFrwC4i1MUTqZZ_u5HwkvyvsGaLwz-jicL3S-Mv7RKB4ytGbYHj3T7dp8xa1htp5lGLn0VB-qa4fVobgQay_ysp6Pyu5sIi_ziQ4GSNGheNTwQCKMhfVrGL3yGx7XLOysmSF7o3Ymq5UJIfZYJe4xe28IPHuDT-P7sACpmodHCsmfJUHr715l_RSD9ALLmK_VcbkryW3UlYxpulXmKzfWqDC5Lw1FOblEF_gF22kBbjcldVMtVpzMJEHKFS0aWUhLT9WyXQCj56b5Ax3eQtdsTFDEyNyB22VBH2N_uqN82l2Fuezyn0m9q8iUevzlBmZ15KxpQM_5ECPvxP1_N8NGIO32gJk24IA=w1390-h1375-s-no?authuser=0',
    name: "Iceland",
    text: "Golden Circle Route, Iceland",
}
]

function App() {
  return (
    <div className="App">
     <div className="HomePage"> 

      <div className="Header"> Image Gallery</div>
      <ImageList 
      galleryImages={galleryImages}/>
      <div className="search">
        <SearchBar/>
      </div>
      <ImageContext 
      galleryImages={galleryImages}
      />
      
      
      
     </div>
     <div className='imagePage'></div>
    </div>
  );
}

export default App;
