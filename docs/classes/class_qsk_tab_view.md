---
title: QskTabView
layout: docs

---


**Module:** **[Container](/docs/modules/group___container/)**



Inherits from [QskControl](/docs/classes/class_qsk_control/), [QskQuickItem](/docs/classes/class_qsk_quick_item/), [QskSkinnable](/docs/classes/class_qsk_skinnable/), QQuickItem

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[setCurrentIndex](/docs/classes/class_qsk_tab_view/#slot-setcurrentindex)**(int index) |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[currentIndexChanged](/docs/classes/class_qsk_tab_view/#signal-currentindexchanged)**(int index) |
| void | **[countChanged](/docs/classes/class_qsk_tab_view/#signal-countchanged)**(int ) |
| void | **[tabPositionChanged](/docs/classes/class_qsk_tab_view/#signal-tabpositionchanged)**(Qsk::Position ) |
| void | **[autoFitTabsChanged](/docs/classes/class_qsk_tab_view/#signal-autofittabschanged)**(bool ) |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskTabView](/docs/classes/class_qsk_tab_view/#function-qsktabview)**(QQuickItem * parent =nullptr) |
| | **[QskTabView](/docs/classes/class_qsk_tab_view/#function-qsktabview)**(Qsk::Position tabPosition, QQuickItem * parent =nullptr) |
| | **[~QskTabView](/docs/classes/class_qsk_tab_view/#function-~qsktabview)**() override |
| const QskTabBar * | **[tabBar](/docs/classes/class_qsk_tab_view/#function-tabbar)**() const |
| QskTabBar * | **[tabBar](/docs/classes/class_qsk_tab_view/#function-tabbar)**() |
| void | **[setTabPosition](/docs/classes/class_qsk_tab_view/#function-settabposition)**(Qsk::Position position) |
| Qsk::Position | **[tabPosition](/docs/classes/class_qsk_tab_view/#function-tabposition)**() const |
| void | **[setAutoFitTabs](/docs/classes/class_qsk_tab_view/#function-setautofittabs)**(bool on) |
| bool | **[autoFitTabs](/docs/classes/class_qsk_tab_view/#function-autofittabs)**() const |
| Qt::Orientation | **[orientation](/docs/classes/class_qsk_tab_view/#function-orientation)**() const |
| int | **[addTab](/docs/classes/class_qsk_tab_view/#function-addtab)**(QskTabButton * button, QQuickItem * item) |
| int | **[insertTab](/docs/classes/class_qsk_tab_view/#function-inserttab)**(int index, QskTabButton * button, QQuickItem * item) |
| int | **[addTab](/docs/classes/class_qsk_tab_view/#function-addtab)**(const QString & tabText, QQuickItem * item) |
| int | **[insertTab](/docs/classes/class_qsk_tab_view/#function-inserttab)**(int index, const QString & tabText, QQuickItem * item) |
| void | **[removeTab](/docs/classes/class_qsk_tab_view/#function-removetab)**(int index) |
| void | **[clear](/docs/classes/class_qsk_tab_view/#function-clear)**(bool autoDelete =false) |
| QQuickItem * | **[itemAt](/docs/classes/class_qsk_tab_view/#function-itemat)**(int index) const |
| QskTabButton * | **[buttonAt](/docs/classes/class_qsk_tab_view/#function-buttonat)**(int index) const |
| int | **[itemIndex](/docs/classes/class_qsk_tab_view/#function-itemindex)**(const QQuickItem * item) |
| int | **[buttonIndex](/docs/classes/class_qsk_tab_view/#function-buttonindex)**(const QskTabButton * button) |
| QQuickItem * | **[currentItem](/docs/classes/class_qsk_tab_view/#function-currentitem)**() const |
| QskTabButton * | **[currentButton](/docs/classes/class_qsk_tab_view/#function-currentbutton)**() const |
| int | **[currentIndex](/docs/classes/class_qsk_tab_view/#function-currentindex)**() const |
| int | **[count](/docs/classes/class_qsk_tab_view/#function-count)**() const |
| QRectF | **[tabRect](/docs/classes/class_qsk_tab_view/#function-tabrect)**() const |
| QskAspect::Placement | **[effectivePlacement](/docs/classes/class_qsk_tab_view/#function-effectiveplacement)**() const override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[event](/docs/classes/class_qsk_tab_view/#function-event)**(QEvent * event) override |
| void | **[updateLayout](/docs/classes/class_qsk_tab_view/#function-updatelayout)**() override |
| QSizeF | **[layoutSizeHint](/docs/classes/class_qsk_tab_view/#function-layoutsizehint)**(Qt::SizeHint which, const QSizeF & constraint) const override |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| QskTabBar | **[tabBar](/docs/classes/class_qsk_tab_view/#property-tabbar)**  |
| Qsk::Position | **[tabPosition](/docs/classes/class_qsk_tab_view/#property-tabposition)**  |
| bool | **[autoFitTabs](/docs/classes/class_qsk_tab_view/#property-autofittabs)**  |
| Qt::Orientation | **[orientation](/docs/classes/class_qsk_tab_view/#property-orientation)**  |
| int | **[count](/docs/classes/class_qsk_tab_view/#property-count)**  |
| int | **[currentIndex](/docs/classes/class_qsk_tab_view/#property-currentindex)**  |

## Public Slots Documentation

### slot setCurrentIndex

```cpp
void setCurrentIndex(
    int index
)
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


## Public Property Documentation

### property tabBar

```cpp
QskTabBar tabBar;
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

Updated on 23 January 2021 at 09:50:34 CET