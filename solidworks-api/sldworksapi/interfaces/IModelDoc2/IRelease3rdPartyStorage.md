---
type: method
interface: IModelDoc2
member: IRelease3rdPartyStorage
returns: void
parameters:
  -
    name: StringIn
    type: System.String
    description: Name of the stream to release
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - parts
  - ui
related:
  - DAssemblyDocEvents_LoadFromStorageNotifyEventHandler
  - DAssemblyDocEvents_SaveToStorageNotifyEventHandler
  - DDrawingDocEvents_LoadFromStorageNotifyEventHandler
  - DDrawingDocEvents_SaveToStorageNotifyEventHandler
  - DPartDocEvents_LoadFromStorageNotifyEventHandler
  - DPartDocEvents_SaveToStorageNotifyEventHandler
keywords:
  - istream
  - storage
  - stream
  - irelease3rdpartystorage
  - imodeldoc2
  - model
  - doc2
  - release3rd
  - party
  - string
  - void
---

# IModelDoc2.IRelease3rdPartyStorage

Releases the specified third-party stream.

## Signature

```csharp
void IRelease3rdPartyStorage( 
   System.String
StringIn
)
```
## Parameters

- `StringIn` (System.String): Name of the stream to release

## Return Value

Unknown.

## Remarks

You can use this method with
IModelDoc2::IGet3rdPartyStorage
. You must use it if you are not using the LoadFromStorageNotify event. You must call this method when the call to IModelDoc2::IGet3rdPartyStorage returns a NULL stream.
NOTE
:
If you are using serialization, then be careful with the standard MFC macros; otherwise, you can get messages like
Unexpected File Format
after your application is unloaded. One way of using IMPLEMENT_SERIAL is:
IMPLEMENT_SERIAL( CCustomAttr, CObject, VERSIONABLE_SCHEMA|0 )

## See Also

- `DAssemblyDocEvents_LoadFromStorageNotifyEventHandler`
- `DAssemblyDocEvents_SaveToStorageNotifyEventHandler`
- `DDrawingDocEvents_LoadFromStorageNotifyEventHandler`
- `DDrawingDocEvents_SaveToStorageNotifyEventHandler`
- `DPartDocEvents_LoadFromStorageNotifyEventHandler`
- `DPartDocEvents_SaveToStorageNotifyEventHandler`