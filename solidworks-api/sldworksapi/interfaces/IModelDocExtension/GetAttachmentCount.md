---
type: method
interface: IModelDocExtension
member: GetAttachmentCount
returns: System.Int32
parameters: []
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
  - getattachmentcount
  - imodeldocextension
  - model
  - doc
  - extension
  - attachment
  - count
  - int32
---

# IModelDocExtension.GetAttachmentCount

Gets the number of attachments for this document.

## Signature

```csharp
System.Int32 GetAttachmentCount()
```
## Parameters

None.

## Return Value

Number of Attachments for this document

## Remarks

This method is supported by SOLIDWORKS 2005 and later.
Call this method before calling
IModelDocExtension::IGetAttachments
to determine the size of the array for that method.

## See Also

- `IModelDocExtension.DeleteAttachment`
- `IModelDocExtension.GetAttachments`
- `IModelDocExtension.InsertAttachment`