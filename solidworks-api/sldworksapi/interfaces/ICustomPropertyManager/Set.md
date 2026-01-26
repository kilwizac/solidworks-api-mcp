---
type: method
interface: ICustomPropertyManager
member: Set
returns: System.Int32
parameters:
  -
    name: FieldName
    type: System.String
    description: Name of the existing custom property
  -
    name: FieldValue
    type: System.String
    description: Value for the existing custom property
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
related:
  - ICustomPropertyManager.Get2
keywords:
  - icustompropertymanager
  - custom
  - manager
  - field
  - name
  - string
  - value
  - int32
---

# ICustomPropertyManager.Set

Obsolete. Superseded by ICustomPropertyManager::Set2.

## Signature

```csharp
System.Int32 Set( 
   System.String
FieldName
,
   System.String
FieldValue
)
```
## Parameters

- `FieldName` (System.String): Name of the existing custom property
- `FieldValue` (System.String): Value for the existing custom property

## Return Value

0 if the value for the existing custom property is set 1 if the value for the existing custom property is not set -1 if the custom property does not exist

## See Also

- `ICustomPropertyManager.Get2`