---
type: method
interface: IModelDocExtension
member: IGet3rdPartyStorageStore
returns: System.Object
parameters:
  -
    name: SubStorageName
    type: System.String
    description: Name of the storage
  -
    name: IsStoring
    type: System.Boolean
    description: True if you are storing data, false if not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - parts
  - ui
related: []
keywords:
  - stream
  - storage
  - iget3rdpartystoragestore
  - imodeldocextension
  - model
  - doc
  - extension
  - get3rd
  - party
  - store
  - sub
  - name
  - string
  - storing
  - boolean
  - object
---

# IModelDocExtension.IGet3rdPartyStorageStore

Gets the IStorage interface to the specified third-party storage in this SOLIDWORKS document.

## Signature

```csharp
System.Object IGet3rdPartyStorageStore( 
   System.String
SubStorageName
,
   System.Boolean
IsStoring
)
```
## Parameters

- `SubStorageName` (System.String): Name of the storage
- `IsStoring` (System.Boolean): True if you are storing data, false if not

## Return Value

Unknown type, the third-party IStorage storage

## Remarks

Call this interface when a SaveToStorageStoreNotify or LoadFromStorageStoreNotify notification is received. Do not call this method to save or load from storage in reaction to the FileSaveNotify or FileOpenNotify events.
During a file-open operation, your application receives a
LoadFromStorageStoreNotify
event if you have registered for document notifications. When you receive this event, it is safe to open your Stream for reading using ModelDocExtension::IGet3rdPartyStorageStore. When a file is fully loaded, you can call this method for reading your data at any time. This provides you with access to read your storage node whenever needed. However, it is not a good idea to attempt this while in the middle of a FileSaveNotify or FileOpenNotify as unforeseen conflicts can occur.
If your application is loaded in the middle of a SOLIDWORKS Design session, then you can traverse all open documents using
ISldworks::EnumDocuments2
,
ISldworks::IGetFirstDocument2
, or
IModelDoc2::IGetNext
, and read the storage from all existing open documents. From that point on, your application can use the LoadFromStorageStoreNotify event to recognize when new documents have been opened and need reading.
For storage writing, IModelDoc2::IGet3rdPartyStorageStore interface is locked unless the
SaveToStorageStoreNotify
event has been sent. Therefore, you can only write to your storage when the file is actually being saved and your application has received the
SaveToStorageStoreNotify
event.
Your call to IModelDocExtension::IGet3rdPartyStorageStore must be followed by a call to
IModelDocExtension::IRelease3rdPartyStorageStore
. This must be done even when you fail to obtain a Stream and the return value from IModelDocExtension::IGet3rdPartyStorageStore is NULL. If you fail to call IModelDocExtension::IRelease3rdPartyStorageStore, the third-party node may remain locked and prevent future access. You are not required to call IModelDocExtension::IRelease3rdPartyStorageStore, under any circumstance, if you called IModelDocExtension::IGet3rdPartyStorageStore in reaction to one of the
SaveToStorageStoreNotify
or
LoadFromStorageStoreNotify
events. However, calling MIodelDocExtension::IRelease3rdPartyStorageStore excessively does not cause problems.
As work progresses during an active session and you have information that needs to be stored, you may want to flag the document as dirty using
IModelDoc2::SetSaveFlag
. This causes a "
Save Changes?
" prompt to display if the user tries to close the file without saving. If the user clicks
Yes
to this prompt, then your application receives the
SaveToStorageStoreNotify
event.
NOTE:
The name given to the storage should be registered with so that no conflicts occur. Once registered, the storage name is reserved exclusively for your application.
Passing the unique ID string and a flag to determine if data is being stored or loaded returns an IUnknown pointer. You must then use QueryInterface() to get the
IStorage
interface. The storage is used for serialization and then released in the third-party code.
The IStorage object used by the third party is written to IStorage objects under an IStorage object called ThirdPtyStore in the compound document. Each third party writes to a single IStorage whose name is assigned by SOLIDWORKS.
SwRootStorage --|
|
|-- ThirdPtyStore --|
|
|-- <SW Assigned IStorage name 1> --|
|
|-- <Application 1 IStream name 1>
|
|-- <Application 1 IStream name 2>
|
|-- <SW Assigned IStorage name 2> --|
|-- <Application 2 IStream name 1>
|-- <Application 2 IStream name 2>
|-- <Application 2 IStorage name 2> --|
|-- <Application 2 IStream name 3>
NOTE:
If you are using serialization, then be careful with the standard MFC macros; otherwise, you may get a message like "
Unexpected File Format
" after your application is unloaded. One way of using IMPLEMENT_SERIAL is:
IMPLEMENT_SERIAL( CCustomAttr, CObject, VERSIONABLE_SCHEMA|0 )