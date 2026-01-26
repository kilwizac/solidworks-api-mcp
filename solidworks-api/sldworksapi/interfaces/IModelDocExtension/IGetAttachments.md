---
type: method
interface: IModelDocExtension
member: IGetAttachments
returns: System.String
parameters:
  -
    name: NumAttachments
    type: System.Int32
    description: Number of attachments for this document
  -
    name: LinkedArr
    type: System.Boolean
    description: in-process, unmanaged C++: Pointer to an array of VARIANT_BOOL values indicating if a document is linked or not VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.DeleteAttachment
  - IModelDocExtension.GetAttachments
  - IModelDocExtension.InsertAttachment
keywords:
  - attachments
  - design
  - binder
  - igetattachments
  - imodeldocextension
  - model
  - doc
  - extension
  - num
  - int32
  - linked
  - arr
  - boolean
  - string
---

# IModelDocExtension.IGetAttachments

Gets the attachments for this document.

## Signature

```csharp
System.String IGetAttachments( 
   System.Int32
NumAttachments
,
   out System.Boolean
LinkedArr
)
```
## Parameters

- `NumAttachments` (System.Int32): Number of attachments for this document
- `LinkedArr` (System.Boolean): in-process, unmanaged C++: Pointer to an array of VARIANT_BOOL values indicating if a document is linked or not VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

in-process, unmanaged C++: Pointer to an array of strings of the names of the attachments for this document VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

This method is supported by SOLIDWORKS 2005 and later.
Call
IModelDocExtension::GetAttachmentCoun
t before calling this method to determine the size of the array.
There is a one-to-one correspondence between the output arrays.

## See Also

- `IModelDocExtension.DeleteAttachment`
- `IModelDocExtension.GetAttachments`
- `IModelDocExtension.InsertAttachment`