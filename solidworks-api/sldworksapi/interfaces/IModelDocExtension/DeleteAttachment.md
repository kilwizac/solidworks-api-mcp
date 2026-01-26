---
type: method
interface: IModelDocExtension
member: DeleteAttachment
returns: System.Boolean
parameters:
  -
    name: FileName
    type: System.String
    description: Name of the file to delete from the Attachments folder in the FeatureManager design tree
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.GetAttachmentCount
  - IModelDocExtension.GetAttachments
  - IModelDocExtension.IGetAttachments
  - IModelDocExtension.InsertAttachment
keywords:
  - attachments
  - design
  - binder
  - deleteattachment
  - imodeldocextension
  - model
  - doc
  - extension
  - delete
  - attachment
  - file
  - name
  - string
  - boolean
---

# IModelDocExtension.DeleteAttachment

Deletes the specified file in the Attachments folder in the FeatureManager design tree.

## Signature

```csharp
System.Boolean DeleteAttachment( 
   System.String
FileName
)
```
## Parameters

- `FileName` (System.String): Name of the file to delete from the Attachments folder in the FeatureManager design tree

## Return Value

True if the file is deleted, false if not

## See Also

- `IModelDocExtension.GetAttachmentCount`
- `IModelDocExtension.GetAttachments`
- `IModelDocExtension.IGetAttachments`
- `IModelDocExtension.InsertAttachment`