---
title: QskTabBar
layout: docs

---


**Module:** **[Container](/docs/modules/group__container/)**



Inherits from QskBox

## Public Subcontrols

|                | Name           |
| -------------- | -------------- |
| const QskAspect::Subcontrol | **[Panel](/docs/classes/classQskTabBar/#subcontrol-panel)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskTabBar](/docs/classes/classQskTabBar/#function-qsktabbar)**(QQuickItem * parent =nullptr) |
| | **[QskTabBar](/docs/classes/classQskTabBar/#function-qsktabbar)**(Qsk::Position position, QQuickItem * parent =nullptr) |
| | **[~QskTabBar](/docs/classes/classQskTabBar/#function-~qsktabbar)**() override |
| void | **[setTabPosition](/docs/classes/classQskTabBar/#function-settabposition)**(Qsk::Position position) |
| Qsk::Position | **[tabPosition](/docs/classes/classQskTabBar/#function-tabposition)**() const |
| Qt::Orientation | **[orientation](/docs/classes/classQskTabBar/#function-orientation)**() const |
| void | **[setAutoScrollFocusedButton](/docs/classes/classQskTabBar/#function-setautoscrollfocusedbutton)**(bool on) |
| bool | **[autoScrollFocusButton](/docs/classes/classQskTabBar/#function-autoscrollfocusbutton)**() const |
| void | **[setAutoFitTabs](/docs/classes/classQskTabBar/#function-setautofittabs)**(bool on) |
| bool | **[autoFitTabs](/docs/classes/classQskTabBar/#function-autofittabs)**() const |
| void | **[ensureButtonVisible](/docs/classes/classQskTabBar/#function-ensurebuttonvisible)**(const QskTabButton * button) |
| void | **[setTextOptions](/docs/classes/classQskTabBar/#function-settextoptions)**(const QskTextOptions & options) |
| QskTextOptions | **[textOptions](/docs/classes/classQskTabBar/#function-textoptions)**() const |
| Q_INVOKABLE int | **[addTab](/docs/classes/classQskTabBar/#function-addtab)**(const QString & text) |
| Q_INVOKABLE int | **[insertTab](/docs/classes/classQskTabBar/#function-inserttab)**(int index, const QString & text) |
| Q_INVOKABLE int | **[addTab](/docs/classes/classQskTabBar/#function-addtab)**(QskTabButton * button) |
| Q_INVOKABLE int | **[insertTab](/docs/classes/classQskTabBar/#function-inserttab)**(int index, QskTabButton * button) |
| Q_INVOKABLE void | **[removeTab](/docs/classes/classQskTabBar/#function-removetab)**(int index) |
| Q_INVOKABLE void | **[clear](/docs/classes/classQskTabBar/#function-clear)**(bool autoDelete =false) |
| bool | **[isTabEnabled](/docs/classes/classQskTabBar/#function-istabenabled)**(int index) const |
| void | **[setTabEnabled](/docs/classes/classQskTabBar/#function-settabenabled)**(int index, bool enabled) |
| int | **[currentIndex](/docs/classes/classQskTabBar/#function-currentindex)**() const |
| int | **[count](/docs/classes/classQskTabBar/#function-count)**() const |
| Q_INVOKABLE QskTabButton * | **[buttonAt](/docs/classes/classQskTabBar/#function-buttonat)**(int position) |
| Q_INVOKABLE const QskTabButton * | **[buttonAt](/docs/classes/classQskTabBar/#function-buttonat)**(int position) const |
| Q_INVOKABLE QskTabButton * | **[currentButton](/docs/classes/classQskTabBar/#function-currentbutton)**() |
| Q_INVOKABLE const QskTabButton * | **[currentButton](/docs/classes/classQskTabBar/#function-currentbutton)**() const |
| Q_INVOKABLE QString | **[currentButtonText](/docs/classes/classQskTabBar/#function-currentbuttontext)**() const |
| Q_INVOKABLE QString | **[buttonTextAt](/docs/classes/classQskTabBar/#function-buttontextat)**(int index) const |
| int | **[indexOf](/docs/classes/classQskTabBar/#function-indexof)**(const QskTabButton * tabButton) const |
| Q_INVOKABLE int | **[indexOf](/docs/classes/classQskTabBar/#function-indexof)**(QskTabButton * button) const |
| QskAspect::Placement | **[effectivePlacement](/docs/classes/classQskTabBar/#function-effectiveplacement)**() const override |
| QskAspect::Subcontrol | **[effectiveSubcontrol](/docs/classes/classQskTabBar/#function-effectivesubcontrol)**(QskAspect::Subcontrol subControl) const override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[componentComplete](/docs/classes/classQskTabBar/#function-componentcomplete)**() override |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[currentIndexChanged](/docs/classes/classQskTabBar/#signal-currentindexchanged)**(int index) |
| void | **[countChanged](/docs/classes/classQskTabBar/#signal-countchanged)**(int ) |
| void | **[textOptionsChanged](/docs/classes/classQskTabBar/#signal-textoptionschanged)**(const QskTextOptions & ) |
| void | **[tabPositionChanged](/docs/classes/classQskTabBar/#signal-tabpositionchanged)**(Qsk::Position ) |
| void | **[autoScrollFocusedButtonChanged](/docs/classes/classQskTabBar/#signal-autoscrollfocusedbuttonchanged)**(bool ) |
| void | **[autoFitTabsChanged](/docs/classes/classQskTabBar/#signal-autofittabschanged)**(bool ) |

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[setCurrentIndex](/docs/classes/classQskTabBar/#slot-setcurrentindex)**(int index) |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| Qsk::Position | **[tabPosition](/docs/classes/classQskTabBar/#property-tabposition)**  |
| Qt::Orientation | **[orientation](/docs/classes/classQskTabBar/#property-orientation)**  |
| bool | **[autoScrollFocusButton](/docs/classes/classQskTabBar/#property-autoscrollfocusbutton)**  |
| bool | **[autoFitTabs](/docs/classes/classQskTabBar/#property-autofittabs)**  |
| int | **[count](/docs/classes/classQskTabBar/#property-count)**  |
| int | **[currentIndex](/docs/classes/classQskTabBar/#property-currentindex)**  |
| QskTextOptions | **[textOptions](/docs/classes/classQskTabBar/#property-textoptions)**  |

## Public Subcontrols Documentation

### subcontrol Panel




## Public Functions Documentation

### function QskTabBar

```cpp
QskTabBar(
    QQuickItem * parent =nullptr
)
```


### function QskTabBar

```cpp
QskTabBar(
    Qsk::Position position,
    QQuickItem * parent =nullptr
)
```


### function ~QskTabBar

```cpp
~QskTabBar() override
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


### function orientation

```cpp
Qt::Orientation orientation() const
```


### function setAutoScrollFocusedButton

```cpp
void setAutoScrollFocusedButton(
    bool on
)
```


### function autoScrollFocusButton

```cpp
bool autoScrollFocusButton() const
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


### function ensureButtonVisible

```cpp
void ensureButtonVisible(
    const QskTabButton * button
)
```


### function setTextOptions

```cpp
void setTextOptions(
    const QskTextOptions & options
)
```


### function textOptions

```cpp
QskTextOptions textOptions() const
```


### function addTab

```cpp
Q_INVOKABLE int addTab(
    const QString & text
)
```


### function insertTab

```cpp
Q_INVOKABLE int insertTab(
    int index,
    const QString & text
)
```


### function addTab

```cpp
Q_INVOKABLE int addTab(
    QskTabButton * button
)
```


### function insertTab

```cpp
Q_INVOKABLE int insertTab(
    int index,
    QskTabButton * button
)
```


### function removeTab

```cpp
Q_INVOKABLE void removeTab(
    int index
)
```


### function clear

```cpp
Q_INVOKABLE void clear(
    bool autoDelete =false
)
```


### function isTabEnabled

```cpp
bool isTabEnabled(
    int index
) const
```


### function setTabEnabled

```cpp
void setTabEnabled(
    int index,
    bool enabled
)
```


### function currentIndex

```cpp
int currentIndex() const
```


### function count

```cpp
int count() const
```


### function buttonAt

```cpp
Q_INVOKABLE QskTabButton * buttonAt(
    int position
)
```


### function buttonAt

```cpp
Q_INVOKABLE const QskTabButton * buttonAt(
    int position
) const
```


### function currentButton

```cpp
Q_INVOKABLE QskTabButton * currentButton()
```


### function currentButton

```cpp
Q_INVOKABLE const QskTabButton * currentButton() const
```


### function currentButtonText

```cpp
Q_INVOKABLE QString currentButtonText() const
```


### function buttonTextAt

```cpp
Q_INVOKABLE QString buttonTextAt(
    int index
) const
```


### function indexOf

```cpp
inline int indexOf(
    const QskTabButton * tabButton
) const
```


### function indexOf

```cpp
Q_INVOKABLE int indexOf(
    QskTabButton * button
) const
```


### function effectivePlacement

```cpp
QskAspect::Placement effectivePlacement() const override
```


### function effectiveSubcontrol

```cpp
QskAspect::Subcontrol effectiveSubcontrol(
    QskAspect::Subcontrol subControl
) const override
```


## Protected Functions Documentation

### function componentComplete

```cpp
void componentComplete() override
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


### signal textOptionsChanged

```cpp
void textOptionsChanged(
    const QskTextOptions & 
)
```


### signal tabPositionChanged

```cpp
void tabPositionChanged(
    Qsk::Position 
)
```


### signal autoScrollFocusedButtonChanged

```cpp
void autoScrollFocusedButtonChanged(
    bool 
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

### property tabPosition

```cpp
Qsk::Position tabPosition;
```


### property orientation

```cpp
Qt::Orientation orientation;
```


### property autoScrollFocusButton

```cpp
bool autoScrollFocusButton;
```


### property autoFitTabs

```cpp
bool autoFitTabs;
```


### property count

```cpp
int count;
```


### property currentIndex

```cpp
int currentIndex;
```


### property textOptions

```cpp
QskTextOptions textOptions;
```


-------------------------------

Updated on  3 February 2021 at 15:05:43 CET