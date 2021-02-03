---
title: QskPopup
layout: docs

---


**Module:** **[Controls](/docs/modules/group__Controls/)**



Inherits from [QskControl](/docs/classes/classQskControl/), [QskQuickItem](/docs/classes/classQskQuickItem/), QskSkinnable

Inherited by [QskSubWindow](/docs/classes/classQskSubWindow/)

## Public Subcontrols

|                | Name           |
| -------------- | -------------- |
| const QskAspect::Subcontrol | **[Overlay](/docs/classes/classQskPopup/#subcontrol-overlay)**  |

## Public States

|                | Name           |
| -------------- | -------------- |
| const QskAspect::State | **[Closed](/docs/classes/classQskPopup/#state-closed)**  |

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[PopupFlag](/docs/classes/classQskPopup/#enum-popupflag)** { DeleteOnClose = 1 << 0, CloseOnPressOutside = 1 << 1} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskPopup](/docs/classes/classQskPopup/#function-qskpopup)**(QQuickItem * parent =nullptr) |
| | **[~QskPopup](/docs/classes/classQskPopup/#function-~qskpopup)**() override |
| void | **[setPopupFlags](/docs/classes/classQskPopup/#function-setpopupflags)**(PopupFlags flags) |
| PopupFlags | **[popupFlags](/docs/classes/classQskPopup/#function-popupflags)**() const |
| void | **[setPopupFlag](/docs/classes/classQskPopup/#function-setpopupflag)**(PopupFlag flag, bool on =true) |
| bool | **[testPopupFlag](/docs/classes/classQskPopup/#function-testpopupflag)**(PopupFlag flag) const |
| void | **[setModal](/docs/classes/classQskPopup/#function-setmodal)**(bool on =true) |
| bool | **[isModal](/docs/classes/classQskPopup/#function-ismodal)**() const |
| void | **[setOverlay](/docs/classes/classQskPopup/#function-setoverlay)**(bool on =true) |
| void | **[resetOverlay](/docs/classes/classQskPopup/#function-resetoverlay)**() |
| bool | **[hasOverlay](/docs/classes/classQskPopup/#function-hasoverlay)**() const |
| void | **[setPriority](/docs/classes/classQskPopup/#function-setpriority)**(uint priority) |
| uint | **[priority](/docs/classes/classQskPopup/#function-priority)**() const |
| void | **[setFaderEffect](/docs/classes/classQskPopup/#function-setfadereffect)**(bool on) |
| bool | **[hasFaderEffect](/docs/classes/classQskPopup/#function-hasfadereffect)**() const |
| [QskAspect](/docs/classes/classQskAspect/) | **[faderAspect](/docs/classes/classQskPopup/#function-faderaspect)**() const |
| void | **[setFaderAspect](/docs/classes/classQskPopup/#function-setfaderaspect)**([QskAspect](/docs/classes/classQskAspect/) aspect) |
| virtual QRectF | **[overlayRect](/docs/classes/classQskPopup/#function-overlayrect)**() const |
| bool | **[isOpen](/docs/classes/classQskPopup/#function-isopen)**() const |
| bool | **[isFading](/docs/classes/classQskPopup/#function-isfading)**() const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[aboutToShow](/docs/classes/classQskPopup/#function-abouttoshow)**() override |
| bool | **[event](/docs/classes/classQskPopup/#function-event)**(QEvent * event) override |
| void | **[focusInEvent](/docs/classes/classQskPopup/#function-focusinevent)**(QFocusEvent * event) override |
| void | **[focusOutEvent](/docs/classes/classQskPopup/#function-focusoutevent)**(QFocusEvent * event) override |
| void | **[windowChangeEvent](/docs/classes/classQskPopup/#function-windowchangeevent)**(QskWindowChangeEvent * event) override |
| void | **[itemChange](/docs/classes/classQskPopup/#function-itemchange)**(QQuickItem::ItemChange change, const QQuickItem::ItemChangeData & value) override |
| virtual QQuickItem * | **[focusSuccessor](/docs/classes/classQskPopup/#function-focussuccessor)**() const |
| bool | **[isTransitionAccepted](/docs/classes/classQskPopup/#function-istransitionaccepted)**([QskAspect](/docs/classes/classQskAspect/) aspect) const override |
| void | **[grabFocus](/docs/classes/classQskPopup/#function-grabfocus)**(bool on) |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[opened](/docs/classes/classQskPopup/#signal-opened)**() |
| void | **[closed](/docs/classes/classQskPopup/#signal-closed)**() |
| void | **[openChanged](/docs/classes/classQskPopup/#signal-openchanged)**(bool ) |
| void | **[fadingChanged](/docs/classes/classQskPopup/#signal-fadingchanged)**(bool ) |
| void | **[modalChanged](/docs/classes/classQskPopup/#signal-modalchanged)**(bool ) |
| void | **[overlayChanged](/docs/classes/classQskPopup/#signal-overlaychanged)**(bool ) |
| void | **[priorityChanged](/docs/classes/classQskPopup/#signal-prioritychanged)**(uint ) |
| void | **[faderEffectChanged](/docs/classes/classQskPopup/#signal-fadereffectchanged)**(bool ) |

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[open](/docs/classes/classQskPopup/#slot-open)**() |
| void | **[close](/docs/classes/classQskPopup/#slot-close)**() |
| void | **[setOpen](/docs/classes/classQskPopup/#slot-setopen)**(bool on) |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| bool | **[open](/docs/classes/classQskPopup/#property-open)**  |
| bool | **[modal](/docs/classes/classQskPopup/#property-modal)**  |
| bool | **[overlay](/docs/classes/classQskPopup/#property-overlay)**  |
| bool | **[faderEffect](/docs/classes/classQskPopup/#property-fadereffect)**  |
| uint | **[priority](/docs/classes/classQskPopup/#property-priority)**  |

## Public Subcontrols Documentation

### subcontrol Overlay




## Public States Documentation

### state Closed




## Public Types Documentation

### enum PopupFlag

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| DeleteOnClose | 1 << 0|   |
| CloseOnPressOutside | 1 << 1|   |




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

Updated on  3 February 2021 at 15:05:44 CET