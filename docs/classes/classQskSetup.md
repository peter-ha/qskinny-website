---
title: QskSetup
summary: Singleton maintaining the global settings of an application using Qsk controls. 
layout: docs

---


**Module:** **[Framework](/docs/modules/group__Framework/)**



Singleton maintaining the global settings of an application using Qsk controls. 
`#include <QskSetup.h>`

Inherits from QObject

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[Flag](/docs/classes/classQskSetup/#enum-flag)** { DeferredUpdate =  1 << 0, DeferredPolish =  1 << 1, DeferredLayout =  1 << 2, CleanupOnVisibility =  1 << 3, PreferRasterForTextures =  1 << 4, DebugForceBackground =  1 << 7} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| [QskSetup](/docs/classes/classQskSetup/) * | **[instance](/docs/classes/classQskSetup/#function-instance)**() |
| void | **[setup](/docs/classes/classQskSetup/#function-setup)**() |
| void | **[cleanup](/docs/classes/classQskSetup/#function-cleanup)**() |
| [QskSetup](/docs/classes/classQskSetup/) * | **[qmlAttachedProperties](/docs/classes/classQskSetup/#function-qmlattachedproperties)**(QObject * ) |
| Q_INVOKABLE void | **[setControlFlags](/docs/classes/classQskSetup/#function-setcontrolflags)**(Flags ) |
| Q_INVOKABLE void | **[resetControlFlags](/docs/classes/classQskSetup/#function-resetcontrolflags)**() |
| Q_INVOKABLE Flags | **[controlFlags](/docs/classes/classQskSetup/#function-controlflags)**() const |
| Q_INVOKABLE void | **[setControlFlag](/docs/classes/classQskSetup/#function-setcontrolflag)**([Flag](/docs/classes/classQskSetup/#enum-flag) flag, bool on =true) |
| Q_INVOKABLE void | **[resetControlFlag](/docs/classes/classQskSetup/#function-resetcontrolflag)**([Flag](/docs/classes/classQskSetup/#enum-flag) flag) |
| Q_INVOKABLE bool | **[testControlFlag](/docs/classes/classQskSetup/#function-testcontrolflag)**([Flag](/docs/classes/classQskSetup/#enum-flag) flag) |
| Q_INVOKABLE QskSkin * | **[setSkin](/docs/classes/classQskSetup/#function-setskin)**(const QString & skinName) |
| Q_INVOKABLE QString | **[skinName](/docs/classes/classQskSetup/#function-skinname)**() const |
| QskSkin * | **[skin](/docs/classes/classQskSetup/#function-skin)**() |
| void | **[addGraphicProvider](/docs/classes/classQskSetup/#function-addgraphicprovider)**(const QString & providerId, QskGraphicProvider * provider) |
| QskGraphicProvider * | **[graphicProvider](/docs/classes/classQskSetup/#function-graphicprovider)**(const QString & providerId) const |
| QLocale | **[inheritedLocale](/docs/classes/classQskSetup/#function-inheritedlocale)**(const QObject * object) |
| void | **[inheritLocale](/docs/classes/classQskSetup/#function-inheritlocale)**(QObject * object, const QLocale & locale) |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[skinChanged](/docs/classes/classQskSetup/#signal-skinchanged)**(QskSkin * ) |
| void | **[controlFlagsChanged](/docs/classes/classQskSetup/#signal-controlflagschanged)**() |

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

[skin()](/docs/classes/classQskSetup/#function-skin), setSkin(), skinChanged() 

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


-------------------------------

Updated on  3 February 2021 at 15:05:45 CET