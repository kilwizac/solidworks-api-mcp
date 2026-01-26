---
type: method
interface: ICustomPropertyManager
member: GetAll2
returns: System.Int32
parameters:
  -
    name: PropNames
    type: System.Object
    description: Array of the names of custom properties retrieved
  -
    name: PropTypes
    type: System.Object
    description: Array of types of PropNames as defined in swCustomInfoType_e
  -
    name: PropValues
    type: System.Object
    description: Array of evaluated values of PropNames
  -
    name: Resolved
    type: System.Object
    description: Array of evaluation statuses of PropNames as defined in swCustomInfoGetResult_e
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
related:
  - ICustomPropertyManager.Get5
  - ICustomPropertyManager.GetNames
  - ICustomPropertyManager.GetType2
  - ICustomPropertyManager.IGetNames
  - ICustomPropertyManager.Set2
keywords:
  - getall2
  - icustompropertymanager
  - custom
  - manager
  - all2
  - prop
  - names
  - object
  - types
  - values
  - resolved
  - int32
---

# ICustomPropertyManager.GetAll2

Obsolete. Superseded by ICustomPropertyManager::GetAll3.

## Signature

```csharp
System.Int32 GetAll2( 
   out System.Object
PropNames
,
   out System.Object
PropTypes
,
   out System.Object
PropValues
,
   out System.Object
Resolved
)
```
## Parameters

- `PropNames` (System.Object): Array of the names of custom properties retrieved
- `PropTypes` (System.Object): Array of types of PropNames as defined in swCustomInfoType_e
- `PropValues` (System.Object): Array of evaluated values of PropNames
- `Resolved` (System.Object): Array of evaluation statuses of PropNames as defined in swCustomInfoGetResult_e

## Return Value

Number of custom properties retrieved

## See Also

- `ICustomPropertyManager.Get5`
- `ICustomPropertyManager.GetNames`
- `ICustomPropertyManager.GetType2`
- `ICustomPropertyManager.IGetNames`
- `ICustomPropertyManager.Set2`