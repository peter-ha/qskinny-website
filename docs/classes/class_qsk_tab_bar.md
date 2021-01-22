---
title: QskTabBar
layout: docs

---


**Module:** **[Container](/docs/modules/group___container/)**



Inherits from QskBox

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[setCurrentIndex](/docs/classes/class_qsk_tab_bar/#slot-setcurrentindex)**(int index) |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[currentIndexChanged](/docs/classes/class_qsk_tab_bar/#signal-currentindexchanged)**(int index) |
| void | **[countChanged](/docs/classes/class_qsk_tab_bar/#signal-countchanged)**(int ) |
| void | **[textOptionsChanged](/docs/classes/class_qsk_tab_bar/#signal-textoptionschanged)**(const QskTextOptions & ) |
| void | **[positionChanged](/docs/classes/class_qsk_tab_bar/#signal-positionchanged)**(Qsk::Position ) |
| void | **[autoScrollFocusedButtonChanged](/docs/classes/class_qsk_tab_bar/#signal-autoscrollfocusedbuttonchanged)**(bool ) |
| void | **[autoFitTabsChanged](/docs/classes/class_qsk_tab_bar/#signal-autofittabschanged)**(bool ) |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskTabBar](/docs/classes/class_qsk_tab_bar/#function-qsktabbar)**(QQuickItem * parent =nullptr) |
| | **[QskTabBar](/docs/classes/class_qsk_tab_bar/#function-qsktabbar)**(Qsk::Position position, QQuickItem * parent =nullptr) |
| | **[~QskTabBar](/docs/classes/class_qsk_tab_bar/#function-~qsktabbar)**() override |
| void | **[setPosition](/docs/classes/class_qsk_tab_bar/#function-setposition)**(Qsk::Position position) |
| Qsk::Position | **[position](/docs/classes/class_qsk_tab_bar/#function-position)**() const |
| Qt::Orientation | **[orientation](/docs/classes/class_qsk_tab_bar/#function-orientation)**() const |
| void | **[setAutoScrollFocusedButton](/docs/classes/class_qsk_tab_bar/#function-setautoscrollfocusedbutton)**(bool on) |
| bool | **[autoScrollFocusButton](/docs/classes/class_qsk_tab_bar/#function-autoscrollfocusbutton)**() const |
| void | **[setAutoFitTabs](/docs/classes/class_qsk_tab_bar/#function-setautofittabs)**(bool on) |
| bool | **[autoFitTabs](/docs/classes/class_qsk_tab_bar/#function-autofittabs)**() const |
| void | **[ensureButtonVisible](/docs/classes/class_qsk_tab_bar/#function-ensurebuttonvisible)**(const QskTabButton * button) |
| void | **[setTextOptions](/docs/classes/class_qsk_tab_bar/#function-settextoptions)**(const QskTextOptions & options) |
| QskTextOptions | **[textOptions](/docs/classes/class_qsk_tab_bar/#function-textoptions)**() const |
| Q_INVOKABLE int | **[addTab](/docs/classes/class_qsk_tab_bar/#function-addtab)**(const QString & text) |
| Q_INVOKABLE int | **[insertTab](/docs/classes/class_qsk_tab_bar/#function-inserttab)**(int index, const QString & text) |
| Q_INVOKABLE int | **[addTab](/docs/classes/class_qsk_tab_bar/#function-addtab)**(QskTabButton * button) |
| Q_INVOKABLE int | **[insertTab](/docs/classes/class_qsk_tab_bar/#function-inserttab)**(int index, QskTabButton * button) |
| Q_INVOKABLE void | **[removeTab](/docs/classes/class_qsk_tab_bar/#function-removetab)**(int index) |
| Q_INVOKABLE void | **[clear](/docs/classes/class_qsk_tab_bar/#function-clear)**(bool autoDelete =false) |
| bool | **[isTabEnabled](/docs/classes/class_qsk_tab_bar/#function-istabenabled)**(int index) const |
| void | **[setTabEnabled](/docs/classes/class_qsk_tab_bar/#function-settabenabled)**(int index, bool enabled) |
| int | **[currentIndex](/docs/classes/class_qsk_tab_bar/#function-currentindex)**() const |
| int | **[count](/docs/classes/class_qsk_tab_bar/#function-count)**() const |
| Q_INVOKABLE QskTabButton * | **[buttonAt](/docs/classes/class_qsk_tab_bar/#function-buttonat)**(int position) |
| const Q_INVOKABLE QskTabButton * | **[buttonAt](/docs/classes/class_qsk_tab_bar/#function-buttonat)**(int position) const |
| Q_INVOKABLE QskTabButton * | **[currentButton](/docs/classes/class_qsk_tab_bar/#function-currentbutton)**() |
| const Q_INVOKABLE QskTabButton * | **[currentButton](/docs/classes/class_qsk_tab_bar/#function-currentbutton)**() const |
| Q_INVOKABLE QString | **[currentButtonText](/docs/classes/class_qsk_tab_bar/#function-currentbuttontext)**() const |
| Q_INVOKABLE QString | **[buttonTextAt](/docs/classes/class_qsk_tab_bar/#function-buttontextat)**(int index) const |
| int | **[indexOf](/docs/classes/class_qsk_tab_bar/#function-indexof)**(const QskTabButton * tabButton) const |
| Q_INVOKABLE int | **[indexOf](/docs/classes/class_qsk_tab_bar/#function-indexof)**(QskTabButton * button) const |
| QskAspect::Placement | **[effectivePlacement](/docs/classes/class_qsk_tab_bar/#function-effectiveplacement)**() const override |
| QskAspect::Subcontrol | **[effectiveSubcontrol](/docs/classes/class_qsk_tab_bar/#function-effectivesubcontrol)**(QskAspect::Subcontrol subControl) const override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[componentComplete](/docs/classes/class_qsk_tab_bar/#function-componentcomplete)**() override |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| Qsk::Position | **[position](/docs/classes/class_qsk_tab_bar/#property-position)**  |
| Qt::Orientation | **[orientation](/docs/classes/class_qsk_tab_bar/#property-orientation)**  |
| bool | **[autoScrollFocusButton](/docs/classes/class_qsk_tab_bar/#property-autoscrollfocusbutton)**  |
| bool | **[autoFitTabs](/docs/classes/class_qsk_tab_bar/#property-autofittabs)**  |
| int | **[count](/docs/classes/class_qsk_tab_bar/#property-count)**  |
| int | **[currentIndex](/docs/classes/class_qsk_tab_bar/#property-currentindex)**  |
| QskTextOptions | **[textOptions](/docs/classes/class_qsk_tab_bar/#property-textoptions)**  |

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


### signal textOptionsChanged

```cpp
void textOptionsChanged(
    const QskTextOptions & 
)
```


### signal positionChanged

```cpp
void positionChanged(
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


### function setPosition

```cpp
void setPosition(
    Qsk::Position position
)
```


### function position

```cpp
Qsk::Position position() const
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
const Q_INVOKABLE QskTabButton * buttonAt(
    int position
) const
```


### function currentButton

```cpp
Q_INVOKABLE QskTabButton * currentButton()
```


### function currentButton

```cpp
const Q_INVOKABLE QskTabButton * currentButton() const
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


## Public Property Documentation

### property position

```cpp
Qsk::Position position;
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

Updated on 22 January 2021 at 17:05:49 CET