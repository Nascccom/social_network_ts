import {useAppSelector} from "../../../../hooks/useAppSelector.ts";
import style from "./GroupesPage.module.css"
import {TitleWithUnderLine} from "../../../../common/TitleWithUnderLine/TitleWithUnderLine.tsx";
import {GroupCard} from "./GroupCard/GroupCard.tsx";
import {GroupType} from "../../../../redux/reducers/groupsReducer.ts";
import {ShowMore} from "../../../../common/ShowMore/ShowMore.tsx";
import {memo} from "react";

export const GroupsPage = memo(() => {
    const groupsData = useAppSelector<GroupType[]>(state => state.groupsData)


    const mappedGroups = groupsData.map(g => (
      <GroupCard key={g.id}
                 id={g.id}
                 name={g.nameGroup}
                 subscribers={g.subscribers}
                 type={g.type}
                 logo={g.logo}


      />))

    return (
      <div className={style.groupsPage}>
          <TitleWithUnderLine title={"My Groups"} styles={style.title}/>
          {mappedGroups}
          <ShowMore onLoadMore={() => {}}/>
      </div>
    );
});

