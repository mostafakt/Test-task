import { SvgIcon, SvgIconProps } from "@mui/material";
import { SvgStyle } from "./NavePage.Style";

export const FeaturesIcon = ({ active }: { active: boolean }) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
      className={active ? "gradient-bg" : "black"}
    >
      <linearGradient id="gradient">
        <stop className="main-stop" offset="0%" />
        <stop className="alt-stop" offset="100%" />
      </linearGradient>
      <path d="M1.7028 0.385417C1.44499 0.453125 1.24967 0.570313 1.04655 0.773438C0.846029 0.979167 0.749674 1.14323 0.681966 1.41667C0.632487 1.60938 0.629883 1.71094 0.629883 4.11458V6.60938H1.67936H2.72624L2.72884 6.44531C2.74186 5.53385 3.62988 4.85938 4.52051 5.08854C4.76009 5.15104 4.97103 5.27344 5.16113 5.46354C5.42936 5.73177 5.57519 6.0625 5.58561 6.42448L5.59082 6.60938H6.24967H6.90592V5.64583C6.90592 4.73698 6.90853 4.67448 6.95801 4.58073C6.99186 4.51042 7.04394 4.46094 7.12207 4.42448C7.2679 4.35417 7.31738 4.35417 7.51269 4.4401C7.98926 4.64583 8.46842 4.35417 8.46842 3.86198C8.46842 3.60938 8.34863 3.41146 8.12467 3.28906C7.93978 3.1875 7.73926 3.1875 7.51269 3.28385C7.42415 3.32292 7.32519 3.35417 7.29134 3.35417C7.18197 3.35417 7.02311 3.2526 6.96322 3.14844C6.90592 3.04948 6.90592 3.03646 6.90592 1.6901V0.333333L4.40072 0.335938C2.0127 0.335938 1.88249 0.338542 1.7028 0.385417Z" />
      <path d="M7.68701 1.38021V2.42969L7.85107 2.43229C8.76253 2.44531 9.43701 3.33333 9.20784 4.22396C9.0542 4.82292 8.4917 5.27344 7.87712 5.28906L7.68701 5.29427V5.95052V6.60938H8.65316C9.59847 6.60938 9.62191 6.60938 9.72087 6.66667C9.82503 6.72656 9.92659 6.88542 9.92659 6.99479C9.92659 7.02865 9.89534 7.1276 9.85628 7.21615C9.65055 7.69271 9.94222 8.17188 10.4344 8.17188C10.687 8.17188 10.8849 8.05208 11.0073 7.82813C11.1089 7.64323 11.1089 7.44271 11.0125 7.21615C10.9292 7.02083 10.9266 6.97135 10.9969 6.82552C11.0334 6.7474 11.0828 6.69531 11.1532 6.66146C11.2495 6.61198 11.312 6.60938 12.6089 6.60938H13.9631V4.11458C13.9631 1.70833 13.9604 1.60938 13.911 1.41667C13.8433 1.14844 13.7313 0.955729 13.5229 0.75C13.3198 0.549479 13.1532 0.455729 12.8797 0.385417C12.687 0.335938 12.5854 0.333334 10.1818 0.333334H7.68701V1.38021Z" />
      <path d="M3.91634 5.86751C3.55436 6.02376 3.41634 6.39876 3.5804 6.78418C3.61947 6.87272 3.65072 6.97168 3.65072 7.00553C3.65072 7.11491 3.54915 7.27376 3.44499 7.33366C3.34603 7.39095 3.33301 7.39095 1.98665 7.39095H0.629883V9.88574C0.629883 12.292 0.632487 12.391 0.681966 12.5837C0.74707 12.8467 0.861654 13.042 1.05697 13.2399C1.25488 13.4352 1.4502 13.5498 1.71322 13.6149C1.90592 13.6644 2.00488 13.667 4.41113 13.667H6.90592V12.6175V11.5706L6.74186 11.568C6.22103 11.5602 5.71322 11.2373 5.49447 10.7764C5.21842 10.1956 5.31999 9.57585 5.76009 9.13574C6.02832 8.86751 6.35905 8.72168 6.72103 8.71126L6.90592 8.70606V8.0472V7.39095H5.93978C4.99447 7.39095 4.97103 7.39095 4.87207 7.33366C4.7679 7.27376 4.66634 7.11491 4.66634 7.00553C4.66634 6.97168 4.69759 6.87272 4.73665 6.78418C4.90072 6.40397 4.75749 6.01856 4.3929 5.86491C4.28092 5.81803 4.02832 5.81803 3.91634 5.86751Z" />
      <path d="M7.68713 8.3571C7.68713 9.30241 7.68713 9.32585 7.62984 9.42481C7.56995 9.52897 7.41109 9.63053 7.30172 9.63053C7.26786 9.63053 7.1689 9.59928 7.08036 9.56022C6.6038 9.35449 6.12463 9.64616 6.12463 10.1383C6.12463 10.391 6.24443 10.5889 6.46838 10.7113C6.65328 10.8128 6.8538 10.8128 7.08036 10.7165C7.1689 10.6774 7.26786 10.6462 7.30172 10.6462C7.41109 10.6462 7.56995 10.7477 7.62984 10.8519C7.68713 10.9508 7.68713 10.9639 7.68713 12.3102V13.667H10.1819C12.5856 13.667 12.6871 13.6644 12.8798 13.6149C13.1533 13.5472 13.3173 13.4508 13.5231 13.2503C13.7314 13.0446 13.8434 12.8519 13.9111 12.5837C13.9606 12.391 13.9632 12.292 13.9632 9.88574V7.39095H12.9163H11.8668L11.8642 7.56803C11.8512 8.20606 11.3616 8.7946 10.7392 8.92481C9.86682 9.10449 9.03088 8.45606 9.00745 7.57585L9.00224 7.39095H8.34599H7.68713V8.3571Z" />
    </svg>
  );
};
export const AboutIcon = ({ active }: { active: boolean }) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
      className={active ? "gradient-bg" : "black"}
    >
      <linearGradient id="gradient">
        <stop className="main-stop" offset="0%" />
        <stop className="alt-stop" offset="100%" />
      </linearGradient>
      <path d="M1.81603 0.38565C1.56254 0.445108 1.18388 0.65165 0.971083 0.839416C0.736377 1.04909 0.50167 1.40584 0.39527 1.72191L0.307647 1.97852L0.298258 5.69314C0.295129 7.73978 0.295129 9.41089 0.304517 9.41089C0.313905 9.41089 0.426564 9.33578 0.554871 9.2419C0.858424 9.02284 1.19953 8.86324 1.57506 8.75684L1.87235 8.67548L6.43504 8.66609L10.9977 8.6567L10.9883 5.33326C10.979 2.27582 10.9727 1.99417 10.9226 1.82205C10.713 1.10229 10.1465 0.54525 9.45806 0.382521C9.16703 0.316803 2.09767 0.316803 1.81603 0.38565ZM6.00006 2.43229C6.06264 2.4761 6.1534 2.56685 6.20034 2.63257C6.27544 2.7421 6.28483 2.78591 6.28483 2.99558C6.28483 3.20525 6.27544 3.24907 6.20034 3.3586C6.1534 3.42431 6.06264 3.51507 5.99693 3.55888C5.89991 3.6246 5.84671 3.63711 5.6433 3.63711C5.43989 3.63711 5.38669 3.6246 5.28968 3.55888C5.22396 3.51507 5.13321 3.42431 5.08627 3.3586C5.01116 3.24907 5.00177 3.20525 5.00177 2.99245C5.00177 2.7734 5.01116 2.73897 5.09565 2.61692C5.23648 2.41664 5.42111 2.33215 5.67773 2.34467C5.8342 2.35405 5.91243 2.37596 6.00006 2.43229ZM5.91869 4.5822C5.9625 4.61349 6.02822 4.68234 6.06264 4.72928C6.12523 4.81378 6.12836 4.85133 6.12836 5.99982C6.12836 7.14832 6.12523 7.18587 6.06264 7.27037C5.9406 7.43623 5.84046 7.4863 5.6433 7.4863C5.44615 7.4863 5.34601 7.43623 5.22396 7.27037C5.16137 7.189 5.15824 7.13893 5.14885 6.08432C5.1426 5.47721 5.14885 4.93895 5.15824 4.88262C5.18015 4.75745 5.31158 4.59785 5.43989 4.54152C5.56507 4.48206 5.81542 4.50396 5.91869 4.5822Z" />
      <path d="M2.10704 9.68006C1.83478 9.72074 1.65328 9.77707 1.41857 9.8866C1.04304 10.0681 0.695674 10.4123 0.517297 10.7879C0.351438 11.1352 0.310755 11.3324 0.313885 11.7111C0.320144 12.4496 0.723838 13.1005 1.38727 13.4479C1.83165 13.6763 1.61572 13.6669 5.63389 13.6669C8.103 13.6669 9.29218 13.6575 9.40484 13.6325C9.65832 13.5824 10.109 13.3477 10.3124 13.1662C10.5377 12.9659 10.7818 12.6061 10.8663 12.3463C10.9789 12.0052 10.9977 11.7549 10.9883 10.694L10.9789 9.67693L6.58211 9.6738C4.16307 9.67067 2.15085 9.6738 2.10704 9.68006Z" />
    </svg>
  );
};
export const PartnersIcon = ({ active }: { active: boolean }) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
      className={active ? "gradient-bg" : "black"}
    >
      <linearGradient id="gradient">
        <stop className="main-stop" offset="0%" />
        <stop className="alt-stop" offset="100%" />
      </linearGradient>
      <path d="M12.4556 0.244564C12.3823 0.28559 12.0014 0.502444 11.6087 0.731021C11.2189 0.959597 10.8849 1.14422 10.8732 1.14422C10.8585 1.14422 10.5068 1.02114 10.0907 0.868752C9.67459 0.716368 9.25261 0.575706 9.15004 0.558123C8.90681 0.508306 8.59032 0.534679 8.35295 0.622593C8.11266 0.710507 5.66572 2.11713 5.49868 2.26365C5.34337 2.39846 5.2027 2.65927 5.16168 2.88784C5.05032 3.51203 5.51919 4.10985 6.15511 4.15673C6.53314 4.18311 6.42471 4.23293 8.41156 3.08711C9.00059 2.74718 9.53393 2.45413 9.59547 2.43362C9.78009 2.37501 10.0673 2.41018 10.2724 2.51567C10.3691 2.56549 11.597 3.27173 12.9977 4.08347C15.4359 5.49596 15.5502 5.5575 15.6146 5.51647C15.7055 5.45786 15.7963 5.27324 15.7963 5.15016C15.7963 5.03587 15.8315 5.09741 14.2285 2.36622C13.4227 0.994762 12.9977 0.297312 12.9421 0.256286C12.8131 0.16251 12.6138 0.15958 12.4556 0.244564Z" />
      <path d="M3.59093 0.853769C3.54112 0.865491 3.46492 0.915309 3.4239 0.959266C3.36236 1.02667 1.22605 4.96814 0.883184 5.64801C0.777687 5.86193 0.768896 5.98501 0.853879 6.12568C0.927141 6.24289 0.968167 6.28099 1.12641 6.36304C1.21726 6.41286 1.24363 6.41579 1.26414 6.38356C1.2788 6.36304 1.39308 6.1667 1.51616 5.94985C1.86196 5.3491 2.20189 5.04726 2.71179 4.88609C2.87883 4.83334 2.98433 4.82162 3.26858 4.82162C3.57335 4.82455 3.64954 4.83334 3.84881 4.90367C4.10376 4.99159 4.35578 5.14104 4.51696 5.29635L4.62246 5.39599L4.79535 5.34617C5.00635 5.2817 5.45764 5.27584 5.68622 5.33152C5.77413 5.35203 5.95875 5.42236 6.09648 5.48683C6.55363 5.70369 6.95804 6.19894 7.06646 6.6766C7.10163 6.8202 7.11042 6.83192 7.22178 6.86122C7.45036 6.92276 7.79615 7.12496 7.9837 7.30958C8.20642 7.5323 8.35587 7.7726 8.45844 8.0803L8.53756 8.31766L8.74562 8.39385C9.18812 8.55503 9.55443 8.88324 9.76249 9.30523C9.92953 9.64809 9.97348 9.85909 9.95883 10.2283C9.93832 10.6474 9.87385 10.8203 9.49289 11.4796C9.27017 11.8635 9.18519 12.0364 9.21156 12.0481C9.22915 12.0599 9.52219 12.2269 9.85627 12.4203C10.5098 12.7983 10.6563 12.854 10.9288 12.8276C11.1838 12.8071 11.3772 12.7075 11.5618 12.5082C11.9164 12.1243 11.9222 11.5822 11.5735 11.1807C11.4885 11.0811 11.4856 11.0723 11.5471 11.1104C11.7318 11.2276 12.1039 11.4327 12.2329 11.4914C12.5582 11.6349 13.0065 11.547 13.2703 11.2892C13.493 11.0694 13.5545 10.917 13.5545 10.5653C13.5545 10.243 13.5164 10.1316 13.3259 9.9177L13.2322 9.80927L13.5252 9.96751C13.8183 10.1258 13.8183 10.1258 14.082 10.1258C14.3926 10.1258 14.5421 10.0701 14.756 9.87374C15.1604 9.49864 15.1809 8.86566 14.8 8.47298C14.7384 8.40851 14.5831 8.29715 14.4571 8.22096C14.2461 8.09788 14.2373 8.08909 14.3457 8.1096C14.8146 8.20337 15.2864 7.96601 15.4828 7.53816C15.5824 7.32423 15.5736 6.95793 15.4681 6.73814C15.4212 6.6473 15.3333 6.52129 15.2688 6.45682C15.1956 6.38649 14.7531 6.11102 14.1318 5.75351C13.5721 5.42822 12.394 4.74836 11.512 4.23846C10.6299 3.72855 9.8885 3.30364 9.86799 3.29485C9.84748 3.28899 9.24966 3.6172 8.54049 4.02453C7.02544 4.90074 7.00492 4.91246 6.71774 4.98572C5.97633 5.17327 5.13529 4.88316 4.67521 4.27655C4.40267 3.91317 4.2708 3.52342 4.2708 3.07799C4.2708 2.5593 4.45835 2.08749 4.81001 1.71533L5.01221 1.5014L4.47593 1.19077C3.7902 0.79809 3.78434 0.79516 3.59093 0.853769Z" />
      <path d="M2.9696 5.72685C2.8055 5.7796 2.67656 5.86458 2.54469 5.99938C2.44505 6.10488 1.40767 7.86316 1.27873 8.14741C1.18788 8.34962 1.19374 8.69541 1.29631 8.91227C1.39301 9.12326 1.57177 9.30495 1.7857 9.40458C1.92343 9.46905 1.99083 9.48078 2.19889 9.48078C2.49194 9.48078 2.69707 9.40165 2.88462 9.2141C2.95788 9.14084 2.99012 9.12033 2.97546 9.15842C2.96374 9.19066 2.94616 9.32253 2.9403 9.45147C2.92858 9.64195 2.93737 9.71521 2.98719 9.85001C3.0751 10.0815 3.24507 10.2632 3.48244 10.3804C3.65533 10.4654 3.70515 10.4771 3.91321 10.4771C4.19454 10.4742 4.41139 10.3892 4.59308 10.2075L4.70737 10.0932L4.66927 10.2398C4.61946 10.4332 4.62239 10.565 4.67807 10.7555C4.88906 11.4706 5.74475 11.7079 6.30154 11.2068L6.41583 11.1043L6.3836 11.2156C6.33378 11.4002 6.36894 11.7431 6.45686 11.9131C6.5477 12.0889 6.73818 12.2794 6.91694 12.3702C7.11328 12.4698 7.46201 12.4816 7.68765 12.3966C7.98363 12.2852 8.09499 12.1475 8.58437 11.2977C8.8276 10.8727 9.0386 10.4742 9.05911 10.3951C9.11186 10.1841 9.07962 9.89104 8.98585 9.70642C8.68401 9.11154 7.91916 8.97674 7.4327 9.43389L7.31841 9.53939L7.42684 9.34891C7.57629 9.08809 7.62025 8.9826 7.65835 8.80091C7.71989 8.51079 7.59681 8.15328 7.36237 7.93642C6.97555 7.58184 6.41876 7.57304 6.02315 7.91591L5.90886 8.01554L6.00557 7.85437C6.2107 7.50857 6.22828 7.44996 6.22828 7.15106C6.22828 6.91369 6.21656 6.84922 6.15795 6.72614C5.94989 6.30415 5.48101 6.08437 5.03851 6.19573C4.71909 6.27778 4.5374 6.43016 4.33227 6.79061C4.26487 6.90783 4.20626 6.99867 4.2004 6.99574C4.19747 6.98988 4.20626 6.9342 4.22384 6.86973C4.29417 6.61771 4.19161 6.23089 3.99234 6.00525C3.94252 5.94664 3.81944 5.85579 3.71687 5.80304C3.56449 5.72099 3.49709 5.70341 3.31247 5.69462C3.1806 5.68876 3.04287 5.70341 2.9696 5.72685Z" />
    </svg>
  );
};
export const ExploreIcon = ({ active }: { active: boolean }) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
      className={active ? "gradient-bg" : "black"}
    >
      <linearGradient id="gradient">
        <stop className="main-stop" offset="0%" />
        <stop className="alt-stop" offset="100%" />
      </linearGradient>
      <SvgStyle
        className={active ? "gradient-bg" : "black"}
        d="M3.62988 10.6663L8.62988 8.33301L10.9632 3.33301L5.96322 5.66634L3.62988 10.6663ZM7.29655 7.66634C7.10766 7.66634 6.94944 7.60234 6.82188 7.47434C6.69388 7.34679 6.62988 7.18856 6.62988 6.99967C6.62988 6.81079 6.69388 6.65234 6.82188 6.52434C6.94944 6.39679 7.10766 6.33301 7.29655 6.33301C7.48544 6.33301 7.64388 6.39679 7.77188 6.52434C7.89944 6.65234 7.96322 6.81079 7.96322 6.99967C7.96322 7.18856 7.89944 7.34679 7.77188 7.47434C7.64388 7.60234 7.48544 7.66634 7.29655 7.66634ZM7.29655 13.6663C6.37433 13.6663 5.50766 13.4912 4.69655 13.141C3.88544 12.7912 3.17988 12.3163 2.57988 11.7163C1.97988 11.1163 1.50499 10.4108 1.15522 9.59967C0.804994 8.78856 0.629883 7.9219 0.629883 6.99967C0.629883 6.07745 0.804994 5.21079 1.15522 4.39967C1.50499 3.58856 1.97988 2.88301 2.57988 2.28301C3.17988 1.68301 3.88544 1.2079 4.69655 0.857674C5.50766 0.507897 6.37433 0.333008 7.29655 0.333008C8.21877 0.333008 9.08544 0.507897 9.89655 0.857674C10.7077 1.2079 11.4132 1.68301 12.0132 2.28301C12.6132 2.88301 13.0881 3.58856 13.4379 4.39967C13.7881 5.21079 13.9632 6.07745 13.9632 6.99967C13.9632 7.9219 13.7881 8.78856 13.4379 9.59967C13.0881 10.4108 12.6132 11.1163 12.0132 11.7163C11.4132 12.3163 10.7077 12.7912 9.89655 13.141C9.08544 13.4912 8.21877 13.6663 7.29655 13.6663Z"
      />
    </svg>
  );
};
export const HomeIcon = ({ active }: { active: boolean }) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
      className={active ? "gradient-bg" : "black"}
    >
      <linearGradient id="gradient">
        <stop className="main-stop" offset="0%" />
        <stop className="alt-stop" offset="100%" />
      </linearGradient>
      <path d="M13.4417 12.9546C13.4417 13.1433 13.3667 13.3244 13.2332 13.4579C13.0998 13.5914 12.9187 13.6663 12.7299 13.6663H1.34165C1.15288 13.6663 0.971837 13.5914 0.838355 13.4579C0.704873 13.3244 0.629883 13.1433 0.629883 12.9546V5.47389C0.629808 5.36543 0.654522 5.25838 0.702139 5.16093C0.749755 5.06347 0.819014 4.97819 0.904625 4.91159L6.59877 0.482973C6.72372 0.385778 6.8775 0.333008 7.0358 0.333008C7.19409 0.333008 7.34788 0.385778 7.47282 0.482973L13.167 4.91159C13.2526 4.97819 13.3218 5.06347 13.3695 5.16093C13.4171 5.25838 13.4418 5.36543 13.4417 5.47389V12.9546ZM6.32403 7.9722V12.2428H7.74756V7.9722H6.32403Z" />
    </svg>
  );
};
export const ServicesIcon = ({ active }: { active: boolean }) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
      className={active ? "gradient-bg" : "black"}
    >
      <linearGradient id="gradient">
        <stop className="main-stop" offset="0%" />
        <stop className="alt-stop" offset="100%" />
      </linearGradient>
      <path d="M3.05224 0.370375C2.35944 0.518831 1.82812 1.18037 1.82812 1.8914C1.82812 2.73526 2.54697 3.4541 3.39082 3.4541C4.10967 3.4541 4.766 2.92018 4.91446 2.21696C5.02645 1.68565 4.87278 1.18298 4.48732 0.794908C4.09925 0.406838 3.58356 0.255777 3.05224 0.370375Z" />
      <path d="M6.95886 0.369949C6.26606 0.518406 5.73474 1.17995 5.73474 1.89098C5.73474 2.60982 6.26866 3.26615 6.97188 3.41461C7.60217 3.54744 8.26111 3.27917 8.61792 2.74525C8.80284 2.46657 8.87316 2.23217 8.87316 1.89098C8.87316 1.6722 8.86014 1.57844 8.81065 1.42477C8.56062 0.661653 7.74802 0.198052 6.95886 0.369949Z" />
      <path d="M10.8916 0.370375C10.1988 0.518831 9.66748 1.18037 9.66748 1.8914C9.66748 2.73526 10.3863 3.4541 11.2302 3.4541C11.949 3.4541 12.6054 2.92018 12.7538 2.21696C12.8658 1.68565 12.7121 1.18298 12.3267 0.794908C11.9386 0.406838 11.4229 0.255777 10.8916 0.370375Z" />
      <path d="M1.88004 3.93325C1.48416 4.19891 1.14297 4.58438 0.932005 5.00891C0.715831 5.43865 0.629883 5.80849 0.629883 6.30856V6.60547H2.21602H3.79956L3.84383 6.37106C3.92718 5.91007 4.13554 5.41 4.41422 4.99068C4.48454 4.8839 4.6903 4.64949 4.8674 4.47238L5.19296 4.14943L5.13306 4.09994C5.0992 4.0739 4.99242 3.99837 4.89605 3.93325L4.72155 3.81605L4.54444 3.92023C3.85165 4.33174 2.96351 4.33695 2.26551 3.93325C2.15351 3.87075 2.05975 3.81866 2.05715 3.81866C2.05194 3.81866 1.9738 3.87075 1.88004 3.93325Z" />
      <path d="M9.73002 3.93065C9.64147 3.99055 9.53729 4.06348 9.49822 4.09473L9.42529 4.14943L9.75086 4.47238C9.93057 4.64949 10.1363 4.8839 10.2066 4.99068C10.4853 5.41 10.6937 5.91007 10.777 6.37106L10.8213 6.60547H12.397H13.9727L13.9571 6.20698C13.9467 5.89705 13.9285 5.7538 13.8764 5.55065C13.8009 5.26155 13.6368 4.89692 13.4675 4.64689C13.3216 4.43071 12.9518 4.06869 12.7356 3.92804L12.5637 3.81605L12.358 3.93325C11.6573 4.33695 10.7718 4.33174 10.079 3.92284C9.98526 3.86554 9.90192 3.81866 9.89671 3.81866C9.8915 3.81866 9.81597 3.87075 9.73002 3.93065Z" />
      <path d="M6.8468 4.27444C5.70083 4.49062 4.80488 5.38917 4.60433 6.51952L4.59131 6.60547H7.31301C9.89407 6.60547 10.0347 6.60286 10.0217 6.55859C10.0165 6.53515 10.0035 6.47264 9.99304 6.42315C9.96178 6.25126 9.86802 5.99341 9.75863 5.77203C9.40182 5.0584 8.74027 4.52447 7.96153 4.32393C7.63076 4.23798 7.14893 4.21714 6.8468 4.27444Z" />
      <path d="M0.629883 7.60795C0.629883 7.73818 0.64551 7.8658 0.666346 7.91528C0.734063 8.08197 0.820011 8.12364 1.6821 8.40493L2.49991 8.67059L2.6093 8.93885L2.71609 9.20451L2.35406 9.93116C1.93474 10.7672 1.9113 10.8271 1.95818 10.9704C2.00506 11.1188 3.14583 12.2648 3.30731 12.3273C3.46097 12.3846 3.50264 12.369 4.36213 11.9392L5.08878 11.5772L5.35444 11.684L5.62271 11.7934L5.88837 12.6112C6.16965 13.4733 6.21132 13.5592 6.37801 13.6269C6.50042 13.679 8.12042 13.679 8.24283 13.6269C8.40952 13.5592 8.45119 13.4733 8.73248 12.6112L8.99814 11.7934L9.2664 11.684L9.53206 11.5772L10.2587 11.9392C11.0948 12.3586 11.1547 12.382 11.2979 12.3351C11.4464 12.2882 12.5923 11.1475 12.6549 10.986C12.7122 10.8323 12.6965 10.7906 12.2668 9.93116L11.9048 9.20451L12.0115 8.93885L12.1183 8.67319L12.9257 8.40493C13.7722 8.12364 13.8607 8.08197 13.9285 7.91528C13.9493 7.8658 13.9649 7.73818 13.9649 7.60795V7.38657H12.3788H10.7952L10.777 7.522C10.6286 8.65757 9.7899 9.74104 8.69081 10.2203C7.38335 10.7906 5.83367 10.4937 4.83094 9.48059C4.32827 8.97271 3.96104 8.25647 3.85425 7.57409L3.823 7.38657H2.22644H0.629883V7.60795Z" />
      <path d="M4.61475 7.43352C4.61475 7.52468 4.71632 7.87628 4.79706 8.07162C5.02886 8.62898 5.53674 9.16811 6.08108 9.43638C7.26092 10.0172 8.6387 9.70464 9.46432 8.66545C9.64924 8.43625 9.87844 7.97265 9.95397 7.68876C10.0373 7.36059 10.066 7.38664 9.62059 7.38664H9.23513L9.20127 7.51426C9.15439 7.70178 9.00854 7.99349 8.87571 8.16278C8.60223 8.5222 8.235 8.76442 7.78963 8.88683C7.55262 8.95194 7.03433 8.95194 6.80253 8.88683C6.16182 8.70191 5.64873 8.21747 5.456 7.61583L5.38307 7.38664H5.00021C4.6434 7.38664 4.61475 7.38924 4.61475 7.43352Z" />
      <path d="M6.20349 7.40478C6.20349 7.4178 6.23995 7.48812 6.28423 7.56626C6.52905 7.99339 7.01089 8.2278 7.4849 8.14706C7.72973 8.10539 7.96934 7.98298 8.13342 7.81889C8.25063 7.70169 8.41732 7.46208 8.41732 7.40478C8.41732 7.39436 7.91986 7.38655 7.3104 7.38655C6.70095 7.38655 6.20349 7.39436 6.20349 7.40478Z" />
    </svg>
  );
};
export const PhoneIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.24 10.36L5.76 11.84C5.448 12.152 4.952 12.152 4.632 11.848C4.544 11.76 4.456 11.68 4.368 11.592C3.544 10.76 2.8 9.888 2.136 8.976C1.48 8.064 0.952 7.152 0.568 6.248C0.192 5.336 0 4.464 0 3.632C0 3.088 0.0959999 2.568 0.288 2.088C0.48 1.6 0.784 1.152 1.208 0.752C1.72 0.248 2.28 0 2.872 0C3.096 0 3.32 0.0480001 3.52 0.144C3.728 0.24 3.912 0.384 4.056 0.592L5.912 3.208C6.056 3.408 6.16 3.592 6.232 3.768C6.304 3.936 6.344 4.104 6.344 4.256C6.344 4.448 6.288 4.64 6.176 4.824C6.072 5.008 5.92 5.2 5.728 5.392L5.12 6.024C5.032 6.112 4.992 6.216 4.992 6.344C4.992 6.408 5 6.464 5.016 6.528C5.04 6.592 5.064 6.64 5.08 6.688C5.224 6.952 5.472 7.296 5.824 7.712C6.184 8.128 6.568 8.552 6.984 8.976C7.064 9.056 7.152 9.136 7.232 9.216C7.552 9.528 7.56 10.04 7.24 10.36Z"
        fill="#333333"
      />
      <path
        d="M15.976 13.0641C15.976 13.2881 15.936 13.5201 15.856 13.7441C15.832 13.8081 15.808 13.8721 15.776 13.9361C15.64 14.2241 15.464 14.4961 15.232 14.7521C14.84 15.1841 14.408 15.4961 13.92 15.6961C13.912 15.6961 13.904 15.7041 13.896 15.7041C13.424 15.8961 12.912 16.0001 12.36 16.0001C11.544 16.0001 10.672 15.8081 9.75196 15.4161C8.83196 15.0241 7.91196 14.4961 6.99996 13.8321C6.68796 13.6001 6.37596 13.3681 6.07996 13.1201L8.69596 10.5041C8.91996 10.6721 9.11996 10.8001 9.28796 10.8881C9.32796 10.9041 9.37596 10.9281 9.43196 10.9521C9.49596 10.9761 9.55996 10.9841 9.63196 10.9841C9.76796 10.9841 9.87196 10.9361 9.95996 10.8481L10.568 10.2481C10.768 10.0481 10.96 9.89608 11.144 9.80008C11.328 9.68808 11.512 9.63208 11.712 9.63208C11.864 9.63208 12.024 9.66408 12.2 9.73608C12.376 9.80808 12.56 9.91208 12.76 10.0481L15.408 11.9281C15.616 12.0721 15.76 12.2401 15.848 12.4401C15.928 12.6401 15.976 12.8401 15.976 13.0641Z"
        fill="#333333"
      />
    </svg>
  );
};
export const APlusIcon = () => {
  return (
    <svg
      width="24"
      height="20"
      viewBox="0 0 24 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.032 16L5.152 4.8H6.32L11.44 16H10.192L5.488 5.488H5.968L1.264 16H0.032ZM2.048 13.008L2.4 12.048H8.912L9.264 13.008H2.048Z"
        fill="#333333"
      />
      <path
        d="M17.3335 7.00024H22.6668"
        stroke="#3B7EC5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20 9.66659V4.33325"
        stroke="#3B7EC5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.3333 15H22.6666"
        stroke="#3B7EC5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const LoginButtonIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.84 0H9.75998C7.19998 0 5.59998 1.6 5.59998 4.16V7.4H9.15198L7.49598 5.744C7.37598 5.624 7.31998 5.472 7.31998 5.32C7.31998 5.168 7.37598 5.016 7.49598 4.896C7.72798 4.664 8.11198 4.664 8.34398 4.896L11.024 7.576C11.256 7.808 11.256 8.192 11.024 8.424L8.34398 11.104C8.11198 11.336 7.72798 11.336 7.49598 11.104C7.26398 10.872 7.26398 10.488 7.49598 10.256L9.15198 8.6H5.59998V11.84C5.59998 14.4 7.19998 16 9.75998 16H11.832C14.392 16 15.992 14.4 15.992 11.84V4.16C16 1.6 14.4 0 11.84 0Z"
        fill="white"
      />
      <path
        d="M0.6 7.40039C0.272 7.40039 0 7.67239 0 8.00039C0 8.32839 0.272 8.60039 0.6 8.60039H5.6V7.40039H0.6Z"
        fill="white"
      />
    </svg>
  );
};
