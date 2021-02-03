---
title: QskSkinManager
layout: docs

---


**Module:** **[Themeing](/docs/modules/group__Themeing/)**



Inherits from QObject

## Public Functions

|                | Name           |
| -------------- | -------------- |
| QskSkinManager * | **[instance](/docs/classes/classQskSkinManager/#function-instance)**() |
| void | **[addPluginPath](/docs/classes/classQskSkinManager/#function-addpluginpath)**(const QString & path) |
| void | **[removePluginPath](/docs/classes/classQskSkinManager/#function-removepluginpath)**(const QString & path) |
| void | **[setPluginPaths](/docs/classes/classQskSkinManager/#function-setpluginpaths)**(const QStringList & paths) |
| QStringList | **[pluginPaths](/docs/classes/classQskSkinManager/#function-pluginpaths)**() const |
| void | **[registerFactory](/docs/classes/classQskSkinManager/#function-registerfactory)**(const QString & factoryId, QskSkinFactory * factory) |
| void | **[unregisterFactory](/docs/classes/classQskSkinManager/#function-unregisterfactory)**(const QString & factoryId) |
| QStringList | **[skinNames](/docs/classes/classQskSkinManager/#function-skinnames)**() const |
| QskSkin * | **[createSkin](/docs/classes/classQskSkinManager/#function-createskin)**(const QString & skinName) const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskSkinManager](/docs/classes/classQskSkinManager/#function-qskskinmanager)**() |
| | **[~QskSkinManager](/docs/classes/classQskSkinManager/#function-~qskskinmanager)**() override |

## Protected Attributes

|                | Name           |
| -------------- | -------------- |
| std::unique_ptr< PrivateData > | **[m_data](/docs/classes/classQskSkinManager/#variable-m_data)**  |

## Public Functions Documentation

### function instance

```cpp
static QskSkinManager * instance()
```


### function addPluginPath

```cpp
void addPluginPath(
    const QString & path
)
```


### function removePluginPath

```cpp
void removePluginPath(
    const QString & path
)
```


### function setPluginPaths

```cpp
void setPluginPaths(
    const QStringList & paths
)
```


### function pluginPaths

```cpp
QStringList pluginPaths() const
```


### function registerFactory

```cpp
void registerFactory(
    const QString & factoryId,
    QskSkinFactory * factory
)
```


### function unregisterFactory

```cpp
void unregisterFactory(
    const QString & factoryId
)
```


### function skinNames

```cpp
QStringList skinNames() const
```


### function createSkin

```cpp
QskSkin * createSkin(
    const QString & skinName
) const
```


## Protected Functions Documentation

### function QskSkinManager

```cpp
QskSkinManager()
```


### function ~QskSkinManager

```cpp
~QskSkinManager() override
```


## Protected Attributes Documentation

### variable m_data

```cpp
std::unique_ptr< PrivateData > m_data;
```


-------------------------------

Updated on  3 February 2021 at 15:05:45 CET