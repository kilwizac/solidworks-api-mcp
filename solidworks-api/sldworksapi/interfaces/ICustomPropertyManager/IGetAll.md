---
type: method
interface: ICustomPropertyManager
member: IGetAll
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of custom properties
  -
    name: PropNames
    type: System.String
    description: Array of the names of custom properties
  -
    name: PropTypes
    type: System.Int32
    description: Array of property types as defined in swCustomInfoType_e
  -
    name: PropValues
    type: System.String
    description: Array of values of custom properties
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ICustomPropertyManager.Get2
  - ICustomPropertyManager.GetAll
keywords:
  - igetall
  - icustompropertymanager
  - custom
  - manager
  - all
  - count
  - int32
  - prop
  - names
  - string
  - types
  - values
  - void
---

# ICustomPropertyManager.IGetAll

Gets all of the custom properties for this configuration.

## Signature

```csharp
void IGetAll( 
   System.Int32
Count
,
   out System.String
PropNames
,
   out System.Int32
PropTypes
,
   out System.String
PropValues
)
```
## Parameters

- `Count` (System.Int32): Number of custom properties
- `PropNames` (System.String): Array of the names of custom properties
- `PropTypes` (System.Int32): Array of property types as defined in swCustomInfoType_e
- `PropValues` (System.String): Array of values of custom properties

## Return Value

Unknown.

## See Also

- `ICustomPropertyManager.Get2`
- `ICustomPropertyManager.GetAll`