---
type: method
interface: IModelDoc2
member: IGet3rdPartyStorage
returns: System.Object
parameters:
  -
    name: StringIn
    type: System.String
    description: Name of the stream; the name should be less than 30 characters and must be unique and qualified among all parties choosing to store within the current session
  -
    name: IsStoring
    type: System.Boolean
    description: True if you are storing data, false if you are reading data
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
  - iget3rdpartystorage
  - imodeldoc2
  - model
  - doc2
  - get3rd
  - party
  - string
  - storing
  - boolean
  - object
---

# IModelDoc2.IGet3rdPartyStorage

Gets the IStream interface to the specified third-party stream inside this SOLIDWORKS Design document.

## Signature

```csharp
System.Object IGet3rdPartyStorage( 
   System.String
StringIn
,
   System.Boolean
IsStoring
)
```
## Parameters

- `StringIn` (System.String): Name of the stream; the name should be less than 30 characters and must be unique and qualified among all parties choosing to store within the current session
- `IsStoring` (System.Boolean): True if you are storing data, false if you are reading data

## Return Value

IUnknown (see Remarks )

## Remarks

Call this interface when a SaveToStorageNotify or LoadFromStorageNotify notification is received. Do not call this method to save or load from storage in reaction to the FileSaveNotify or FileOpenNotify2 events.
During a file-open operation, your application receives a
LoadFromStorageNotify
event if you have registered for document notifications. When you receive this event, it is safe to open your Stream for reading using IModelDoc2::
IGet3rdPartyStorage
. When a file is fully loaded, you can call this method for reading your data at any time. This provides you with access to read your storage node whenever needed. However, it is not a good idea to attempt this while in the middle of a FileSaveNotify or FileOpenNotify2 as unforeseen conflicts can occur.
If your application is loaded in the middle of a SOLIDWORKS Design session, then you can traverse all open documents using
ISldworks::EnumDocuments2
,
ISldWorks::IGetFirstDocument2
, or
IModelDoc2::IGetNext
and read the storage from all existing open documents. From that point on, your application can use the LoadFromStorageNotify event to recognize when new documents have been opened and need reading.
For storage writing, IModelDoc2::
IGet3rdPartyStorage
interface is locked unless the
SaveToStorageNotify
event has been sent. Therefore, you can only write to your storage when the file is actually being saved and your application has received the
SaveToStorageNotify
event.
Your call to IModelDoc2::
IGet3rdPartyStorage
must be followed by a call to
IModelDoc2::IRelease3rdPartyStorage
. This must be done even when you fail to obtain a Stream and the return value from IModelDoc2::
IGet3rdPartyStorage
is NULL. If you fail to call IModelDoc2::IRelease3rdPartyStorage, the third-party node may remain locked and prevent future access. You are not required to call IModelDoc2::IRelease3rdPartyStorage, under any circumstance, if you called IModelDoc2::
IGet3rdPartyStorage
in reaction to one of the
SaveToStorageNotify
or
LoadFromStorageNotify
events. However, calling IModelDoc2::IRelease3rdPartyStorage excessively does not cause problems.
As work progresses during an active session and you have information that needs to be stored, you may want to flag the document as dirty using
IModelDoc2::SetSaveFlag
. This causes a
Save Changes?
prompt to display if the user tries to close the file without saving. If the user clicks
Yes
to this prompt, then your application receives the
SaveToStorageNotify
event.
NOTE:
The name given to the storage stream should be registered so that no conflicts occur. Once registered, the stream name is reserved exclusively for your application.
Passing the unique ID string and a flag to determine if data is being stored or loaded returns an IUnknown pointer. You must then use QueryInterface() to get the
IStream
interface. The stream is used for serialization and then released in the third-party code.
SwRootStorage --|
|
|-- ThirdPty --|
|
|-- <SW Assigned IStream name 1>
|-- <SW Assigned IStream name 2>
|-- <SW Assigned IStream name 3>
: : :
|-- <SW Assigned IStream name n>
The IStream object used by the third party is written to IStream objects under an IStorage object called ThirdPty in the SOLIDWORKS compound document. Each third party writes to a single IStream object whose name is assigned by SOLIDWORKS.
NOTE:
If you are using serialization, then be careful with the standard MFC macros;
otherwise, you may get messages like
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