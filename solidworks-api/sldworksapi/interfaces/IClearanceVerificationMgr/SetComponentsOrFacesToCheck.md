---
type: method
interface: IClearanceVerificationMgr
member: SetComponentsOrFacesToCheck
returns: System.Boolean
parameters:
  -
    name: Components
    type: System.Object
    description: Array of component s
  -
    name: Faces
    type: System.Object
    description: Array of face s
  -
    name: Errors
    type: System.Int32
    description: Error code as defined by swClearanceVerificationSetEntityErrors_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - geometry
related: []
keywords:
  - setcomponentsorfacestocheck
  - iclearanceverificationmgr
  - clearance
  - verification
  - mgr
  - components
  - faces
  - check
  - object
  - errors
  - int32
  - boolean
---

# IClearanceVerificationMgr.SetComponentsOrFacesToCheck

Sets the components or faces for which to check clearances.

## Signature

```csharp
System.Boolean SetComponentsOrFacesToCheck( 
   System.Object
Components
,
   System.Object
Faces
,
   out System.Int32
Errors
)
```
## Parameters

- `Components` (System.Object): Array of component s
- `Faces` (System.Object): Array of face s
- `Errors` (System.Int32): Error code as defined by swClearanceVerificationSetEntityErrors_e

## Return Value

True if components and/or faces successfully set, false if not

## Examples

- IClearanceVerificationMgr (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IClearanceVerificationMgr)