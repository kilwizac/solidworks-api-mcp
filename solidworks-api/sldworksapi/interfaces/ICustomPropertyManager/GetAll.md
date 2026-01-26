---
type: method
interface: ICustomPropertyManager
member: GetAll
returns: System.Int32
parameters:
  -
    name: PropNames
    type: System.Object
    description: Array of the names of custom properties
  -
    name: PropTypes
    type: System.Object
    description: Array of property types as defined in swCustomInfoType_e
  -
    name: PropValues
    type: System.Object
    description: Array of values of custom properties
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
related:
  - ICustomPropertyManager.Get2
  - ICustomPropertyManager.IGetAll
  - ICustomPropertyManager.Set
keywords:
  - getall
  - icustompropertymanager
  - custom
  - manager
  - all
  - prop
  - names
  - object
  - types
  - values
  - int32
---

# ICustomPropertyManager.GetAll

Obsolete. Superseded by ICustomPropertyManager::GetAll2.

## Signature

```csharp
System.Int32 GetAll( 
   out System.Object
PropNames
,
   out System.Object
PropTypes
,
   out System.Object
PropValues
)
```
## Parameters

- `PropNames` (System.Object): Array of the names of custom properties
- `PropTypes` (System.Object): Array of property types as defined in swCustomInfoType_e
- `PropValues` (System.Object): Array of values of custom properties

## Return Value

Number of custom properties

## See Also

- `ICustomPropertyManager.Get2`
- `ICustomPropertyManager.IGetAll`
- `ICustomPropertyManager.Set`