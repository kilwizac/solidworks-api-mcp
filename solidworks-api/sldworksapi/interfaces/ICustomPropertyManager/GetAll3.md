---
type: method
interface: ICustomPropertyManager
member: GetAll3
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
  -
    name: PropLink
    type: System.Object
    description: Array of integers indicating whether PropNames are linked to their parent parts: 1 = link 0 = no link
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ICustomPropertyManager.Get6
  - ICustomPropertyManager.GetNames
  - ICustomPropertyManager.GetType2
  - ICustomPropertyManager.Set2
keywords:
  - getall3
  - icustompropertymanager
  - custom
  - manager
  - all3
  - prop
  - names
  - object
  - types
  - values
  - resolved
  - link
  - int32
---

# ICustomPropertyManager.GetAll3

Gets all of the custom properties for this configuration.

## Signature

```csharp
System.Int32 GetAll3( 
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
,
   out System.Object
PropLink
)
```
## Parameters

- `PropNames` (System.Object): Array of the names of custom properties retrieved
- `PropTypes` (System.Object): Array of types of PropNames as defined in swCustomInfoType_e
- `PropValues` (System.Object): Array of evaluated values of PropNames
- `Resolved` (System.Object): Array of evaluation statuses of PropNames as defined in swCustomInfoGetResult_e
- `PropLink` (System.Object): Array of integers indicating whether PropNames are linked to their parent parts: 1 = link 0 = no link

## Return Value

Number of custom properties returned

## Examples

- ICustomPropertyManager (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICustomPropertyManager)

## See Also

- `ICustomPropertyManager.Get6`
- `ICustomPropertyManager.GetNames`
- `ICustomPropertyManager.GetType2`
- `ICustomPropertyManager.Set2`