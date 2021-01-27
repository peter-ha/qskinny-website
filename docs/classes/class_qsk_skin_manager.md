---
title: QskSkinManager
layout: docs

---


**Module:** **[Themeing](/docs/modules/group___themeing/)**



Inherits from QObject

## Public Functions

|                | Name           |
| -------------- | -------------- |
| QskSkinManager * | **[instance](/docs/classes/class_qsk_skin_manager/#function-instance)**() |
| void | **[addPluginPath](/docs/classes/class_qsk_skin_manager/#function-addpluginpath)**(const QString & path) |
| void | **[removePluginPath](/docs/classes/class_qsk_skin_manager/#function-removepluginpath)**(const QString & path) |
| void | **[setPluginPaths](/docs/classes/class_qsk_skin_manager/#function-setpluginpaths)**(const QStringList & paths) |
| QStringList | **[pluginPaths](/docs/classes/class_qsk_skin_manager/#function-pluginpaths)**() const |
| void | **[registerFactory](/docs/classes/class_qsk_skin_manager/#function-registerfactory)**(const QString & factoryId, QskSkinFactory * factory) |
| void | **[unregisterFactory](/docs/classes/class_qsk_skin_manager/#function-unregisterfactory)**(const QString & factoryId) |
| QStringList | **[skinNames](/docs/classes/class_qsk_skin_manager/#function-skinnames)**() const |
| QskSkin * | **[createSkin](/docs/classes/class_qsk_skin_manager/#function-createskin)**(const QString & skinName) const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskSkinManager](/docs/classes/class_qsk_skin_manager/#function-qskskinmanager)**() |
| | **[~QskSkinManager](/docs/classes/class_qsk_skin_manager/#function-~qskskinmanager)**() override |

## Protected Attributes

|                | Name           |
| -------------- | -------------- |
| std::unique_ptr< PrivateData > | **[m_data](/docs/classes/class_qsk_skin_manager/#variable-m_data)**  |

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

Updated on 26 January 2021 at 09:44:54 CET