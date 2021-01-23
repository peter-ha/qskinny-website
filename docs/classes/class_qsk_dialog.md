---
title: QskDialog
layout: docs

---


**Module:** **[Dialogs](/docs/modules/group___dialogs/)**



Inherits from QObject

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[Policy](/docs/classes/class_qsk_dialog/#enum-policy)** { EmbeddedBox, EmbeddedWindow, TopLevelWindow} |
| enum| **[Action](/docs/classes/class_qsk_dialog/#enum-action)** { NoAction = 0, Ok = 1 << 10, Save = 1 << 11, SaveAll = 1 << 12, Open = 1 << 13, Yes = 1 << 14, YesToAll = 1 << 15, No = 1 << 16, NoToAll = 1 << 17, Abort = 1 << 18, Retry = 1 << 19, Ignore = 1 << 20, Close = 1 << 21, Cancel = 1 << 22, Discard = 1 << 23, Help = 1 << 24, Apply = 1 << 25, Reset = 1 << 26, RestoreDefaults = 1 << 27} |
| enum| **[ActionRole](/docs/classes/class_qsk_dialog/#enum-actionrole)** { InvalidRole = -1, AcceptRole, RejectRole, DestructiveRole, UserRole, HelpRole, YesRole, NoRole, ResetRole, ApplyRole, NActionRoles} |
| enum| **[ButtonLayoutFlag](/docs/classes/class_qsk_dialog/#enum-buttonlayoutflag)** { ActionMask = 0x0FFFFFFF, AlternateRole = 1 << 28, Stretch = 1 << 29, Reverse = 1 << 30} |
| enum| **[DialogCode](/docs/classes/class_qsk_dialog/#enum-dialogcode)** { Rejected = 0, Accepted} |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[transientParentChanged](/docs/classes/class_qsk_dialog/#signal-transientparentchanged)**() |
| void | **[policyChanged](/docs/classes/class_qsk_dialog/#signal-policychanged)**() |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| QskDialog * | **[instance](/docs/classes/class_qsk_dialog/#function-instance)**() |
| void | **[setPolicy](/docs/classes/class_qsk_dialog/#function-setpolicy)**(Policy policy) |
| Policy | **[policy](/docs/classes/class_qsk_dialog/#function-policy)**() const |
| Q_INVOKABLE void | **[setTransientParent](/docs/classes/class_qsk_dialog/#function-settransientparent)**(QWindow * window) |
| Q_INVOKABLE QWindow * | **[transientParent](/docs/classes/class_qsk_dialog/#function-transientparent)**() const |
| Q_INVOKABLE Action | **[message](/docs/classes/class_qsk_dialog/#function-message)**(const QString & title, const QString & text, int symbolType, Actions actions =Ok, Action defaultAction =NoAction) const |
| Q_INVOKABLE Action | **[information](/docs/classes/class_qsk_dialog/#function-information)**(const QString & title, const QString & text, Actions actions =Ok, Action defaultAction =NoAction) const |
| Q_INVOKABLE Action | **[warning](/docs/classes/class_qsk_dialog/#function-warning)**(const QString & title, const QString & text, Actions actions =Ok, Action defaultAction =NoAction) const |
| Q_INVOKABLE Action | **[critical](/docs/classes/class_qsk_dialog/#function-critical)**(const QString & title, const QString & text, Actions actions =Ok, Action defaultAction =NoAction) const |
| Q_INVOKABLE Action | **[question](/docs/classes/class_qsk_dialog/#function-question)**(const QString & title, const QString & text, Actions actions =Actions(Yes|No), Action defaultAction =NoAction) const |
| Q_INVOKABLE QString | **[select](/docs/classes/class_qsk_dialog/#function-select)**(const QString & title, const QString & text, const QStringList & entries, int selectedRow =0) const |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| Policy | **[policy](/docs/classes/class_qsk_dialog/#property-policy)**  |
| QWindow | **[transientParent](/docs/classes/class_qsk_dialog/#property-transientparent)**  |

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




## Public Signals Documentation

### signal transientParentChanged

```cpp
void transientParentChanged()
```


### signal policyChanged

```cpp
void policyChanged()
```


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


## Public Property Documentation

### property policy

```cpp
Policy policy;
```


### property transientParent

```cpp
QWindow transientParent;
```


-------------------------------

Updated on 23 January 2021 at 09:50:34 CET