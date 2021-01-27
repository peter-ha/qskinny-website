---
title: QskPopup
layout: docs

---


**Module:** **[Controls](/docs/modules/group___controls/)**



Inherits from [QskControl](/docs/classes/class_qsk_control/), [QskQuickItem](/docs/classes/class_qsk_quick_item/), [QskSkinnable](/docs/classes/class_qsk_skinnable/), QQuickItem

Inherited by [QskSubWindow](/docs/classes/class_qsk_sub_window/)

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[PopupFlag](/docs/classes/class_qsk_popup/#enum-popupflag)** { DeleteOnClose = 1 << 0, CloseOnPressOutside = 1 << 1} |

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[open](/docs/classes/class_qsk_popup/#slot-open)**() |
| void | **[close](/docs/classes/class_qsk_popup/#slot-close)**() |
| void | **[setOpen](/docs/classes/class_qsk_popup/#slot-setopen)**(bool on) |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[opened](/docs/classes/class_qsk_popup/#signal-opened)**() |
| void | **[closed](/docs/classes/class_qsk_popup/#signal-closed)**() |
| void | **[openChanged](/docs/classes/class_qsk_popup/#signal-openchanged)**(bool ) |
| void | **[fadingChanged](/docs/classes/class_qsk_popup/#signal-fadingchanged)**(bool ) |
| void | **[modalChanged](/docs/classes/class_qsk_popup/#signal-modalchanged)**(bool ) |
| void | **[overlayChanged](/docs/classes/class_qsk_popup/#signal-overlaychanged)**(bool ) |
| void | **[priorityChanged](/docs/classes/class_qsk_popup/#signal-prioritychanged)**(uint ) |
| void | **[faderEffectChanged](/docs/classes/class_qsk_popup/#signal-fadereffectchanged)**(bool ) |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskPopup](/docs/classes/class_qsk_popup/#function-qskpopup)**(QQuickItem * parent =nullptr) |
| | **[~QskPopup](/docs/classes/class_qsk_popup/#function-~qskpopup)**() override |
| void | **[setPopupFlags](/docs/classes/class_qsk_popup/#function-setpopupflags)**(PopupFlags flags) |
| PopupFlags | **[popupFlags](/docs/classes/class_qsk_popup/#function-popupflags)**() const |
| void | **[setPopupFlag](/docs/classes/class_qsk_popup/#function-setpopupflag)**(PopupFlag flag, bool on =true) |
| bool | **[testPopupFlag](/docs/classes/class_qsk_popup/#function-testpopupflag)**(PopupFlag flag) const |
| void | **[setModal](/docs/classes/class_qsk_popup/#function-setmodal)**(bool on =true) |
| bool | **[isModal](/docs/classes/class_qsk_popup/#function-ismodal)**() const |
| void | **[setOverlay](/docs/classes/class_qsk_popup/#function-setoverlay)**(bool on =true) |
| void | **[resetOverlay](/docs/classes/class_qsk_popup/#function-resetoverlay)**() |
| bool | **[hasOverlay](/docs/classes/class_qsk_popup/#function-hasoverlay)**() const |
| void | **[setPriority](/docs/classes/class_qsk_popup/#function-setpriority)**(uint priority) |
| uint | **[priority](/docs/classes/class_qsk_popup/#function-priority)**() const |
| void | **[setFaderEffect](/docs/classes/class_qsk_popup/#function-setfadereffect)**(bool on) |
| bool | **[hasFaderEffect](/docs/classes/class_qsk_popup/#function-hasfadereffect)**() const |
| QskAspect | **[faderAspect](/docs/classes/class_qsk_popup/#function-faderaspect)**() const |
| void | **[setFaderAspect](/docs/classes/class_qsk_popup/#function-setfaderaspect)**(QskAspect aspect) |
| virtual QRectF | **[overlayRect](/docs/classes/class_qsk_popup/#function-overlayrect)**() const |
| bool | **[isOpen](/docs/classes/class_qsk_popup/#function-isopen)**() const |
| bool | **[isFading](/docs/classes/class_qsk_popup/#function-isfading)**() const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[aboutToShow](/docs/classes/class_qsk_popup/#function-abouttoshow)**() override |
| bool | **[event](/docs/classes/class_qsk_popup/#function-event)**(QEvent * event) override |
| void | **[focusInEvent](/docs/classes/class_qsk_popup/#function-focusinevent)**(QFocusEvent * event) override |
| void | **[focusOutEvent](/docs/classes/class_qsk_popup/#function-focusoutevent)**(QFocusEvent * event) override |
| void | **[windowChangeEvent](/docs/classes/class_qsk_popup/#function-windowchangeevent)**(QskWindowChangeEvent * event) override |
| void | **[itemChange](/docs/classes/class_qsk_popup/#function-itemchange)**(QQuickItem::ItemChange change, const QQuickItem::ItemChangeData & value) override |
| virtual QQuickItem * | **[focusSuccessor](/docs/classes/class_qsk_popup/#function-focussuccessor)**() const |
| bool | **[isTransitionAccepted](/docs/classes/class_qsk_popup/#function-istransitionaccepted)**(QskAspect aspect) const override |
| void | **[grabFocus](/docs/classes/class_qsk_popup/#function-grabfocus)**(bool on) |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| bool | **[open](/docs/classes/class_qsk_popup/#property-open)**  |
| bool | **[modal](/docs/classes/class_qsk_popup/#property-modal)**  |
| bool | **[overlay](/docs/classes/class_qsk_popup/#property-overlay)**  |
| bool | **[faderEffect](/docs/classes/class_qsk_popup/#property-fadereffect)**  |
| uint | **[priority](/docs/classes/class_qsk_popup/#property-priority)**  |

## Public Types Documentation

### enum PopupFlag

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| DeleteOnClose | 1 << 0|   |
| CloseOnPressOutside | 1 << 1|   |




## Public Slots Documentation

### slot open

```cpp
void open()
```


### slot close

```cpp
void close()
```


### slot setOpen

```cpp
void setOpen(
    bool on
)
```


## Public Signals Documentation

### signal opened

```cpp
void opened()
```


### signal closed

```cpp
void closed()
```


### signal openChanged

```cpp
void openChanged(
    bool 
)
```


### signal fadingChanged

```cpp
void fadingChanged(
    bool 
)
```


### signal modalChanged

```cpp
void modalChanged(
    bool 
)
```


### signal overlayChanged

```cpp
void overlayChanged(
    bool 
)
```


### signal priorityChanged

```cpp
void priorityChanged(
    uint 
)
```


### signal faderEffectChanged

```cpp
void faderEffectChanged(
    bool 
)
```


## Public Functions Documentation

### function QskPopup

```cpp
QskPopup(
    QQuickItem * parent =nullptr
)
```


### function ~QskPopup

```cpp
~QskPopup() override
```


### function setPopupFlags

```cpp
void setPopupFlags(
    PopupFlags flags
)
```


### function popupFlags

```cpp
PopupFlags popupFlags() const
```


### function setPopupFlag

```cpp
void setPopupFlag(
    PopupFlag flag,
    bool on =true
)
```


### function testPopupFlag

```cpp
bool testPopupFlag(
    PopupFlag flag
) const
```


### function setModal

```cpp
void setModal(
    bool on =true
)
```


### function isModal

```cpp
bool isModal() const
```


### function setOverlay

```cpp
void setOverlay(
    bool on =true
)
```


### function resetOverlay

```cpp
void resetOverlay()
```


### function hasOverlay

```cpp
bool hasOverlay() const
```


### function setPriority

```cpp
void setPriority(
    uint priority
)
```


### function priority

```cpp
uint priority() const
```


### function setFaderEffect

```cpp
void setFaderEffect(
    bool on
)
```


### function hasFaderEffect

```cpp
bool hasFaderEffect() const
```


### function faderAspect

```cpp
QskAspect faderAspect() const
```


### function setFaderAspect

```cpp
void setFaderAspect(
    QskAspect aspect
)
```


### function overlayRect

```cpp
virtual QRectF overlayRect() const
```


### function isOpen

```cpp
bool isOpen() const
```


### function isFading

```cpp
bool isFading() const
```


## Protected Functions Documentation

### function aboutToShow

```cpp
void aboutToShow() override
```


### function event

```cpp
bool event(
    QEvent * event
) override
```


### function focusInEvent

```cpp
void focusInEvent(
    QFocusEvent * event
) override
```


### function focusOutEvent

```cpp
void focusOutEvent(
    QFocusEvent * event
) override
```


### function windowChangeEvent

```cpp
void windowChangeEvent(
    QskWindowChangeEvent * event
) override
```


### function itemChange

```cpp
void itemChange(
    QQuickItem::ItemChange change,
    const QQuickItem::ItemChangeData & value
) override
```


### function focusSuccessor

```cpp
virtual QQuickItem * focusSuccessor() const
```


### function isTransitionAccepted

```cpp
bool isTransitionAccepted(
    QskAspect aspect
) const override
```


### function grabFocus

```cpp
void grabFocus(
    bool on
)
```


## Public Property Documentation

### property open

```cpp
bool open;
```


### property modal

```cpp
bool modal;
```


### property overlay

```cpp
bool overlay;
```


### property faderEffect

```cpp
bool faderEffect;
```


### property priority

```cpp
uint priority;
```


-------------------------------

Updated on 26 January 2021 at 09:44:54 CET