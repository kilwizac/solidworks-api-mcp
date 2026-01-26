---
type: property
interface: ICustomPropertyManager
member: Delete
returns: System.Int32
parameters:
  -
    name: FieldName
    type: System.String
    description: Name of the custom property to delete
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
related:
  - ICustomPropertyManager.Add2
keywords:
  - delete
  - icustompropertymanager
  - custom
  - manager
  - field
  - name
  - string
  - int32
readonly: null
---

# ICustomPropertyManager.Delete

Obsolete. Superseded by ICustomPropertyManager::Delete2.

## Signature

```csharp
System.Int32 Delete( 
   System.String
FieldName
)
```
## Parameters

- `FieldName` (System.String): Name of the custom property to delete

## Return Value

0 if the custom property is deleted, 1 if not

## See Also

- `ICustomPropertyManager.Add2`