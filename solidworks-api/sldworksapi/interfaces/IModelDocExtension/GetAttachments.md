---
type: method
interface: IModelDocExtension
member: GetAttachments
returns: System.Object
parameters:
  -
    name: LinkedVar
    type: System.Object
    description: Array of VARIANT_BOOL values indicating if a document is linked or not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.DeleteAttachment
  - IModelDocExtension.GetAttachmentCount
  - IModelDocExtension.IGetAttachments
  - IModelDocExtension.InsertAttachment
keywords:
  - attachments
  - design
  - binder
  - getattachments
  - imodeldocextension
  - model
  - doc
  - extension
  - linked
  - var
  - object
---

# IModelDocExtension.GetAttachments

Gets the attachments for this document.

## Signature

```csharp
System.Object GetAttachments( 
   out System.Object
LinkedVar
)
```
## Parameters

- `LinkedVar` (System.Object): Array of VARIANT_BOOL values indicating if a document is linked or not

## Return Value

Array of strings of the names of the attachments for this document

## Remarks

This method is supported by SOLIDWORKS 2005 and later.
There is a one-to-one correspondence between the output arrays.

## See Also

- `IModelDocExtension.DeleteAttachment`
- `IModelDocExtension.GetAttachmentCount`
- `IModelDocExtension.IGetAttachments`
- `IModelDocExtension.InsertAttachment`