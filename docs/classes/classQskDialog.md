---
title: QskDialog
layout: docs

---


**Module:** **[Dialogs](/docs/modules/group__Dialogs/)**



Inherits from QObject

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[Policy](/docs/classes/classQskDialog/#enum-policy)** { EmbeddedBox, EmbeddedWindow, TopLevelWindow} |
| enum| **[Action](/docs/classes/classQskDialog/#enum-action)** { NoAction = 0, Ok = 1 << 10, Save = 1 << 11, SaveAll = 1 << 12, Open = 1 << 13, Yes = 1 << 14, YesToAll = 1 << 15, No = 1 << 16, NoToAll = 1 << 17, Abort = 1 << 18, Retry = 1 << 19, Ignore = 1 << 20, Close = 1 << 21, Cancel = 1 << 22, Discard = 1 << 23, Help = 1 << 24, Apply = 1 << 25, Reset = 1 << 26, RestoreDefaults = 1 << 27} |
| enum| **[ActionRole](/docs/classes/classQskDialog/#enum-actionrole)** { InvalidRole = -1, AcceptRole, RejectRole, DestructiveRole, UserRole, HelpRole, YesRole, NoRole, ResetRole, ApplyRole, NActionRoles} |
| enum| **[ButtonLayoutFlag](/docs/classes/classQskDialog/#enum-buttonlayoutflag)** { ActionMask = 0x0FFFFFFF, AlternateRole = 1 << 28, Stretch = 1 << 29, Reverse = 1 << 30} |
| enum| **[DialogCode](/docs/classes/classQskDialog/#enum-dialogcode)** { Rejected = 0, Accepted} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| QskDialog * | **[instance](/docs/classes/classQskDialog/#function-instance)**() |
| void | **[setPolicy](/docs/classes/classQskDialog/#function-setpolicy)**(Policy policy) |
| Policy | **[policy](/docs/classes/classQskDialog/#function-policy)**() const |
| Q_INVOKABLE void | **[setTransientParent](/docs/classes/classQskDialog/#function-settransientparent)**(QWindow * window) |
| Q_INVOKABLE QWindow * | **[transientParent](/docs/classes/classQskDialog/#function-transientparent)**() const |
| Q_INVOKABLE Action | **[message](/docs/classes/classQskDialog/#function-message)**(const QString & title, const QString & text, int symbolType, Actions actions =Ok, Action defaultAction =NoAction) const |
| Q_INVOKABLE Action | **[information](/docs/classes/classQskDialog/#function-information)**(const QString & title, const QString & text, Actions actions =Ok, Action defaultAction =NoAction) const |
| Q_INVOKABLE Action | **[warning](/docs/classes/classQskDialog/#function-warning)**(const QString & title, const QString & text, Actions actions =Ok, Action defaultAction =NoAction) const |
| Q_INVOKABLE Action | **[critical](/docs/classes/classQskDialog/#function-critical)**(const QString & title, const QString & text, Actions actions =Ok, Action defaultAction =NoAction) const |
| Q_INVOKABLE Action | **[question](/docs/classes/classQskDialog/#function-question)**(const QString & title, const QString & text, Actions actions =Actions(Yes|No), Action defaultAction =NoAction) const |
| Q_INVOKABLE QString | **[select](/docs/classes/classQskDialog/#function-select)**(const QString & title, const QString & text, const QStringList & entries, int selectedRow =0) const |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[transientParentChanged](/docs/classes/classQskDialog/#signal-transientparentchanged)**() |
| void | **[policyChanged](/docs/classes/classQskDialog/#signal-policychanged)**() |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| Policy | **[policy](/docs/classes/classQskDialog/#property-policy)**  |
| QWindow * | **[transientParent](/docs/classes/classQskDialog/#property-transientparent)**  |

## Public Types Documentation

### enum Policy

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| EmbeddedBox | |   |
| EmbeddedWindow | |   |
| TopLevelWindow | |   |




### enum Action

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| NoAction | 0|   |
| Ok | 1 << 10|   |
| Save | 1 << 11|   |
| SaveAll | 1 << 12|   |
| Open | 1 << 13|   |
| Yes | 1 << 14|   |
| YesToAll | 1 << 15|   |
| No | 1 << 16|   |
| NoToAll | 1 << 17|   |
| Abort | 1 << 18|   |
| Retry | 1 << 19|   |
| Ignore | 1 << 20|   |
| Close | 1 << 21|   |
| Cancel | 1 << 22|   |
| Discard | 1 << 23|   |
| Help | 1 << 24|   |
| Apply | 1 << 25|   |
| Reset | 1 << 26|   |
| RestoreDefaults | 1 << 27|   |




### enum ActionRole

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| InvalidRole | -1|   |
| AcceptRole | |   |
| RejectRole | |   |
| DestructiveRole | |   |
| UserRole | |   |
| HelpRole | |   |
| YesRole | |   |
| NoRole | |   |
| ResetRole | |   |
| ApplyRole | |   |
| NActionRoles | |   |




### enum ButtonLayoutFlag

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| ActionMask | 0x0FFFFFFF|   |
| AlternateRole | 1 << 28|   |
| Stretch | 1 << 29|   |
| Reverse | 1 << 30|   |




### enum DialogCode

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Rejected | 0|   |
| Accepted | |   |




## Public Functions Documentation

### function instance

```cpp
static QskDialog * instance()
```


### function setPolicy

```cpp
void setPolicy(
    Policy policy
)
```


### function policy

```cpp
Policy policy() const
```


### function setTransientParent

```cpp
Q_INVOKABLE void setTransientParent(
    QWindow * window
)
```


### function transientParent

```cpp
Q_INVOKABLE QWindow * transientParent() const
```


### function message

```cpp
Q_INVOKABLE Action message(
    const QString & title,
    const QString & text,
    int symbolType,
    Actions actions =Ok,
    Action defaultAction =NoAction
) const
```


### function information

```cpp
Q_INVOKABLE Action information(
    const QString & title,
    const QString & text,
    Actions actions =Ok,
    Action defaultAction =NoAction
) const
```


### function warning

```cpp
Q_INVOKABLE Action warning(
    const QString & title,
    const QString & text,
    Actions actions =Ok,
    Action defaultAction =NoAction
) const
```


### function critical

```cpp
Q_INVOKABLE Action critical(
    const QString & title,
    const QString & text,
    Actions actions =Ok,
    Action defaultAction =NoAction
) const
```


### function question

```cpp
Q_INVOKABLE Action question(
    const QString & title,
    const QString & text,
    Actions actions =Actions(Yes|No),
    Action defaultAction =NoAction
) const
```


### function select

```cpp
Q_INVOKABLE QString select(
    const QString & title,
    const QString & text,
    const QStringList & entries,
    int selectedRow =0
) const
```


## Public Signals Documentation

### signal transientParentChanged

```cpp
void transientParentChanged()
```


### signal policyChanged

```cpp
void policyChanged()
```


## Public Property Documentation

### property policy

```cpp
Policy policy;
```


### property transientParent

```cpp
QWindow * transientParent;
```


-------------------------------

Updated on  3 February 2021 at 15:05:43 CET