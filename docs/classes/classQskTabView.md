---
title: QskTabView
layout: docs

---


**Module:** **[Container](/docs/modules/group__container/)**



Inherits from [QskControl](/docs/classes/classQskControl/), [QskQuickItem](/docs/classes/classQskQuickItem/), QskSkinnable

## Public Subcontrols

|                | Name           |
| -------------- | -------------- |
| const QskAspect::Subcontrol | **[TabBar](/docs/classes/classQskTabView/#subcontrol-tabbar)**  |
| const QskAspect::Subcontrol | **[Page](/docs/classes/classQskTabView/#subcontrol-page)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskTabView](/docs/classes/classQskTabView/#function-qsktabview)**(QQuickItem * parent =nullptr) |
| | **[QskTabView](/docs/classes/classQskTabView/#function-qsktabview)**(Qsk::Position tabPosition, QQuickItem * parent =nullptr) |
| | **[~QskTabView](/docs/classes/classQskTabView/#function-~qsktabview)**() override |
| const QskTabBar * | **[tabBar](/docs/classes/classQskTabView/#function-tabbar)**() const |
| QskTabBar * | **[tabBar](/docs/classes/classQskTabView/#function-tabbar)**() |
| void | **[setTabPosition](/docs/classes/classQskTabView/#function-settabposition)**(Qsk::Position position) |
| Qsk::Position | **[tabPosition](/docs/classes/classQskTabView/#function-tabposition)**() const |
| void | **[setAutoFitTabs](/docs/classes/classQskTabView/#function-setautofittabs)**(bool on) |
| bool | **[autoFitTabs](/docs/classes/classQskTabView/#function-autofittabs)**() const |
| Qt::Orientation | **[orientation](/docs/classes/classQskTabView/#function-orientation)**() const |
| int | **[addTab](/docs/classes/classQskTabView/#function-addtab)**(QskTabButton * button, QQuickItem * item) |
| int | **[insertTab](/docs/classes/classQskTabView/#function-inserttab)**(int index, QskTabButton * button, QQuickItem * item) |
| int | **[addTab](/docs/classes/classQskTabView/#function-addtab)**(const QString & tabText, QQuickItem * item) |
| int | **[insertTab](/docs/classes/classQskTabView/#function-inserttab)**(int index, const QString & tabText, QQuickItem * item) |
| void | **[removeTab](/docs/classes/classQskTabView/#function-removetab)**(int index) |
| void | **[clear](/docs/classes/classQskTabView/#function-clear)**(bool autoDelete =false) |
| QQuickItem * | **[itemAt](/docs/classes/classQskTabView/#function-itemat)**(int index) const |
| QskTabButton * | **[buttonAt](/docs/classes/classQskTabView/#function-buttonat)**(int index) const |
| int | **[itemIndex](/docs/classes/classQskTabView/#function-itemindex)**(const QQuickItem * item) |
| int | **[buttonIndex](/docs/classes/classQskTabView/#function-buttonindex)**(const QskTabButton * button) |
| QQuickItem * | **[currentItem](/docs/classes/classQskTabView/#function-currentitem)**() const |
| QskTabButton * | **[currentButton](/docs/classes/classQskTabView/#function-currentbutton)**() const |
| int | **[currentIndex](/docs/classes/classQskTabView/#function-currentindex)**() const |
| int | **[count](/docs/classes/classQskTabView/#function-count)**() const |
| QRectF | **[tabRect](/docs/classes/classQskTabView/#function-tabrect)**() const |
| QskAspect::Placement | **[effectivePlacement](/docs/classes/classQskTabView/#function-effectiveplacement)**() const override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[event](/docs/classes/classQskTabView/#function-event)**(QEvent * event) override |
| void | **[updateLayout](/docs/classes/classQskTabView/#function-updatelayout)**() override |
| QSizeF | **[layoutSizeHint](/docs/classes/classQskTabView/#function-layoutsizehint)**(Qt::SizeHint which, const QSizeF & constraint) const override |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[currentIndexChanged](/docs/classes/classQskTabView/#signal-currentindexchanged)**(int index) |
| void | **[countChanged](/docs/classes/classQskTabView/#signal-countchanged)**(int ) |
| void | **[tabPositionChanged](/docs/classes/classQskTabView/#signal-tabpositionchanged)**(Qsk::Position ) |
| void | **[autoFitTabsChanged](/docs/classes/classQskTabView/#signal-autofittabschanged)**(bool ) |

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[setCurrentIndex](/docs/classes/classQskTabView/#slot-setcurrentindex)**(int index) |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| QskTabBar * | **[tabBar](/docs/classes/classQskTabView/#property-tabbar)**  |
| Qsk::Position | **[tabPosition](/docs/classes/classQskTabView/#property-tabposition)**  |
| bool | **[autoFitTabs](/docs/classes/classQskTabView/#property-autofittabs)**  |
| Qt::Orientation | **[orientation](/docs/classes/classQskTabView/#property-orientation)**  |
| int | **[count](/docs/classes/classQskTabView/#property-count)**  |
| int | **[currentIndex](/docs/classes/classQskTabView/#property-currentindex)**  |

## Public Subcontrols Documentation

### subcontrol TabBar




### subcontrol Page




## Public Functions Documentation

### function QskTabView

```cpp
QskTabView(
    QQuickItem * parent =nullptr
)
```


### function QskTabView

```cpp
QskTabView(
    Qsk::Position tabPosition,
    QQuickItem * parent =nullptr
)
```


### function ~QskTabView

```cpp
~QskTabView() override
```


### function tabBar

```cpp
const QskTabBar * tabBar() const
```


### function tabBar

```cpp
QskTabBar * tabBar()
```


### function setTabPosition

```cpp
void setTabPosition(
    Qsk::Position position
)
```


### function tabPosition

```cpp
Qsk::Position tabPosition() const
```


### function setAutoFitTabs

```cpp
void setAutoFitTabs(
    bool on
)
```


### function autoFitTabs

```cpp
bool autoFitTabs() const
```


### function orientation

```cpp
Qt::Orientation orientation() const
```


### function addTab

```cpp
int addTab(
    QskTabButton * button,
    QQuickItem * item
)
```


### function insertTab

```cpp
int insertTab(
    int index,
    QskTabButton * button,
    QQuickItem * item
)
```


### function addTab

```cpp
int addTab(
    const QString & tabText,
    QQuickItem * item
)
```


### function insertTab

```cpp
int insertTab(
    int index,
    const QString & tabText,
    QQuickItem * item
)
```


### function removeTab

```cpp
void removeTab(
    int index
)
```


### function clear

```cpp
void clear(
    bool autoDelete =false
)
```


### function itemAt

```cpp
QQuickItem * itemAt(
    int index
) const
```


### function buttonAt

```cpp
QskTabButton * buttonAt(
    int index
) const
```


### function itemIndex

```cpp
int itemIndex(
    const QQuickItem * item
)
```


### function buttonIndex

```cpp
int buttonIndex(
    const QskTabButton * button
)
```


### function currentItem

```cpp
QQuickItem * currentItem() const
```


### function currentButton

```cpp
QskTabButton * currentButton() const
```


### function currentIndex

```cpp
int currentIndex() const
```


### function count

```cpp
int count() const
```


### function tabRect

```cpp
QRectF tabRect() const
```


### function effectivePlacement

```cpp
QskAspect::Placement effectivePlacement() const override
```


## Protected Functions Documentation

### function event

```cpp
bool event(
    QEvent * event
) override
```


### function updateLayout

```cpp
void updateLayout() override
```


### function layoutSizeHint

```cpp
QSizeF layoutSizeHint(
    Qt::SizeHint which,
    const QSizeF & constraint
) const override
```


## Public Signals Documentation

### signal currentIndexChanged

```cpp
void currentIndexChanged(
    int index
)
```


### signal countChanged

```cpp
void countChanged(
    int 
)
```


### signal tabPositionChanged

```cpp
void tabPositionChanged(
    Qsk::Position 
)
```


### signal autoFitTabsChanged

```cpp
void autoFitTabsChanged(
    bool 
)
```


## Public Slots Documentation

### slot setCurrentIndex

```cpp
void setCurrentIndex(
    int index
)
```


## Public Property Documentation

### property tabBar

```cpp
QskTabBar * tabBar;
```


### property tabPosition

```cpp
Qsk::Position tabPosition;
```


### property autoFitTabs

```cpp
bool autoFitTabs;
```


### property orientation

```cpp
Qt::Orientation orientation;
```


### property count

```cpp
int count;
```


### property currentIndex

```cpp
int currentIndex;
```


-------------------------------

Updated on  3 February 2021 at 15:05:43 CET