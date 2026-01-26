---
type: method
interface: IModelDocExtension
member: IRelease3rdPartyStorageStore
returns: System.Boolean
parameters:
  -
    name: SubStorageName
    type: System.String
    description: Name of the third-party storage
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - parts
  - ui
related:
  - DAssemblyDocEvents_LoadFromStorageNotifyEventHandler
  - DDrawingDocEvents_LoadFromStorageNotifyEventHandler
  - DPartDocEvents_LoadFromStorageNotifyEventHandler
keywords:
  - stream
  - storage
  - irelease3rdpartystoragestore
  - imodeldocextension
  - model
  - doc
  - extension
  - release3rd
  - party
  - store
  - sub
  - name
  - string
  - boolean
---

# IModelDocExtension.IRelease3rdPartyStorageStore

Releases the specified third-party storage in this document.

## Signature

```csharp
System.Boolean IRelease3rdPartyStorageStore( 
   System.String
SubStorageName
)
```
## Parameters

- `SubStorageName` (System.String): Name of the third-party storage

## Return Value

True if the data is released, false if not

## Remarks

You can use this method with
IModelDocExtension::IGet3rdPartyStorageStore
. You must use it if you are not using the LoadFromStorageStoreNotify event. You must call this method when the call to IModelDocExtension::IGet3rdPartyStorageStore returns a NULL stream.
NOTE
:
If you are using serialization, then be careful with the standard MFC macros; otherwise, you can get messages like "
Unexpected File Format
" after your application is unloaded. One way of using IMPLEMENT_SERIAL is:
IMPLEMENT_SERIAL( CCustomAttr, CObject, VERSIONABLE_SCHEMA|0 )

## See Also

- `DAssemblyDocEvents_LoadFromStorageNotifyEventHandler`
- `DDrawingDocEvents_LoadFromStorageNotifyEventHandler`
- `DPartDocEvents_LoadFromStorageNotifyEventHandler`