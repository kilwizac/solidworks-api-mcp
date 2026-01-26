---
type: method
interface: IModelDocExtension
member: InsertAttachment
returns: System.Boolean
parameters:
  -
    name: FileName
    type: System.String
    description: Path and filename of file to insert as an Attachment to this document
  -
    name: Linked
    type: System.Boolean
    description: True to link the document to the file, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.DeleteAttachment
  - IModelDocExtension.GetAttachmentCount
  - IModelDocExtension.GetAttachments
  - IModelDocExtension.IGetAttachments
keywords:
  - attachments
  - design
  - binder
  - insertattachment
  - imodeldocextension
  - model
  - doc
  - extension
  - insert
  - attachment
  - file
  - name
  - string
  - linked
  - boolean
---

# IModelDocExtension.InsertAttachment

Inserts a file as an Attachment to this document.

## Signature

```csharp
System.Boolean InsertAttachment( 
   System.String
FileName
,
   System.Boolean
Linked
)
```
## Parameters

- `FileName` (System.String): Path and filename of file to insert as an Attachment to this document
- `Linked` (System.Boolean): True to link the document to the file, false to not

## Return Value

True if the file is inserted as an Attachment, false if not

## See Also

- `IModelDocExtension.DeleteAttachment`
- `IModelDocExtension.GetAttachmentCount`
- `IModelDocExtension.GetAttachments`
- `IModelDocExtension.IGetAttachments`