---
title: QskSetup
summary: Singleton maintaining the global settings of an application using Qsk controls. 
layout: docs

---


**Module:** **[Framework](/docs/modules/group___framework/)**



Singleton maintaining the global settings of an application using Qsk controls. 
`#include <QskSetup.h>`

Inherits from QObject

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[Flag](/docs/classes/class_qsk_setup/#enum-flag)** { DeferredUpdate =  1 << 0, DeferredPolish =  1 << 1, DeferredLayout =  1 << 2, CleanupOnVisibility =  1 << 3, PreferRasterForTextures =  1 << 4, DebugForceBackground =  1 << 7} |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[skinChanged](/docs/classes/class_qsk_setup/#signal-skinchanged)**(QskSkin * ) |
| void | **[controlFlagsChanged](/docs/classes/class_qsk_setup/#signal-controlflagschanged)**() |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| [QskSetup](/docs/classes/class_qsk_setup/) * | **[instance](/docs/classes/class_qsk_setup/#function-instance)**() |
| void | **[setup](/docs/classes/class_qsk_setup/#function-setup)**() |
| void | **[cleanup](/docs/classes/class_qsk_setup/#function-cleanup)**() |
| [QskSetup](/docs/classes/class_qsk_setup/) * | **[qmlAttachedProperties](/docs/classes/class_qsk_setup/#function-qmlattachedproperties)**(QObject * ) |
| Q_INVOKABLE void | **[setControlFlags](/docs/classes/class_qsk_setup/#function-setcontrolflags)**(Flags ) |
| Q_INVOKABLE void | **[resetControlFlags](/docs/classes/class_qsk_setup/#function-resetcontrolflags)**() |
| Q_INVOKABLE Flags | **[controlFlags](/docs/classes/class_qsk_setup/#function-controlflags)**() const |
| Q_INVOKABLE void | **[setControlFlag](/docs/classes/class_qsk_setup/#function-setcontrolflag)**([Flag](/docs/classes/class_qsk_setup/#enum-flag) flag, bool on =true) |
| Q_INVOKABLE void | **[resetControlFlag](/docs/classes/class_qsk_setup/#function-resetcontrolflag)**([Flag](/docs/classes/class_qsk_setup/#enum-flag) flag) |
| Q_INVOKABLE bool | **[testControlFlag](/docs/classes/class_qsk_setup/#function-testcontrolflag)**([Flag](/docs/classes/class_qsk_setup/#enum-flag) flag) |
| Q_INVOKABLE QskSkin * | **[setSkin](/docs/classes/class_qsk_setup/#function-setskin)**(const QString & skinName) |
| Q_INVOKABLE QString | **[skinName](/docs/classes/class_qsk_setup/#function-skinname)**() const |
| QskSkin * | **[skin](/docs/classes/class_qsk_setup/#function-skin)**() |
| void | **[addGraphicProvider](/docs/classes/class_qsk_setup/#function-addgraphicprovider)**(const QString & providerId, QskGraphicProvider * provider) |
| QskGraphicProvider * | **[graphicProvider](/docs/classes/class_qsk_setup/#function-graphicprovider)**(const QString & providerId) const |
| QLocale | **[inheritedLocale](/docs/classes/class_qsk_setup/#function-inheritedlocale)**(const QObject * object) |
| void | **[inheritLocale](/docs/classes/class_qsk_setup/#function-inheritlocale)**(QObject * object, const QLocale & locale) |

## Public Types Documentation

### enum Flag

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| DeferredUpdate |  1 << 0|   |
| DeferredPolish |  1 << 1|   |
| DeferredLayout |  1 << 2|   |
| CleanupOnVisibility |  1 << 3|   |
| PreferRasterForTextures |  1 << 4|   |
| DebugForceBackground |  1 << 7|   |






```
\var DeferredUpdate
\var DeferredPolish
\var DeferredLayout
\var CleanupOnVisibility
\var PreferRasterForTextures
\var DebugForceBackground
```


## Public Signals Documentation

### signal skinChanged

```cpp
void skinChanged(
    QskSkin * 
)
```


### signal controlFlagsChanged

```cpp
void controlFlagsChanged()
```


## Public Functions Documentation

### function instance

```cpp
static inline QskSetup * instance()
```


### function setup

```cpp
static void setup()
```


### function cleanup

```cpp
static void cleanup()
```


### function qmlAttachedProperties

```cpp
static QskSetup * qmlAttachedProperties(
    QObject * 
)
```


### function setControlFlags

```cpp
Q_INVOKABLE void setControlFlags(
    Flags 
)
```


### function resetControlFlags

```cpp
Q_INVOKABLE void resetControlFlags()
```


### function controlFlags

```cpp
Q_INVOKABLE Flags controlFlags() const
```


### function setControlFlag

```cpp
Q_INVOKABLE void setControlFlag(
    Flag flag,
    bool on =true
)
```


### function resetControlFlag

```cpp
Q_INVOKABLE void resetControlFlag(
    Flag flag
)
```


### function testControlFlag

```cpp
Q_INVOKABLE bool testControlFlag(
    Flag flag
)
```


### function setSkin

```cpp
Q_INVOKABLE QskSkin * setSkin(
    const QString & skinName
)
```


### function skinName

```cpp
Q_INVOKABLE QString skinName() const
```


### function skin

```cpp
QskSkin * skin()
```


**Par**: Access functions:

[skin()](/docs/classes/class_qsk_setup/#function-skin), setSkin(), skinChanged() 

### function addGraphicProvider

```cpp
void addGraphicProvider(
    const QString & providerId,
    QskGraphicProvider * provider
)
```


### function graphicProvider

```cpp
QskGraphicProvider * graphicProvider(
    const QString & providerId
) const
```


### function inheritedLocale

```cpp
QLocale inheritedLocale(
    const QObject * object
)
```


### function inheritLocale

```cpp
void inheritLocale(
    QObject * object,
    const QLocale & locale
)
```


-------------------------------

Updated on 22 January 2021 at 17:05:50 CET