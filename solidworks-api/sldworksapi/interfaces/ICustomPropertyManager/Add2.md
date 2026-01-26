---
type: property
interface: ICustomPropertyManager
member: Add2
returns: System.Int32
parameters:
  -
    name: FieldName
    type: System.String
    description: Name of custom property
  -
    name: FieldType
    type: System.Int32
    description: Type of custom property as defined in swCustomInfoType_e
  -
    name: FieldValue
    type: System.String
    description: Value of custom property
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
related:
  - ICustomPropertyManager.Delete
keywords:
  - add2
  - icustompropertymanager
  - custom
  - manager
  - field
  - name
  - string
  - type
  - int32
  - value
readonly: null
---

# ICustomPropertyManager.Add2

Obsolete. Superseded by ICustomPropertyManager::Add3.

## Signature

```csharp
System.Int32 Add2( 
   System.String
FieldName
,
   System.Int32
FieldType
,
   System.String
FieldValue
)
```
## Parameters

- `FieldName` (System.String): Name of custom property
- `FieldType` (System.Int32): Type of custom property as defined in swCustomInfoType_e
- `FieldValue` (System.String): Value of custom property

## Return Value

1 if custom property is added 0 if custom property is not added -1 if the custom property already exists

## See Also

- `ICustomPropertyManager.Delete`