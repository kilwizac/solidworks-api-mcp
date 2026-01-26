---
type: property
interface: IMateInPlace
member: MateEntity
returns: System.Object
parameters:
  -
    name: NIndex
    type: System.Int32
    description: 0-based index associated with this entity
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related: []
keywords:
  - mateentity
  - imateinplace
  - mate
  - place
  - entity
  - index
  - int32
  - object
readonly: true
---

# IMateInPlace.MateEntity

Gets the name of the mated entity associated with the specified index for this Inplace mate.

## Signature

```csharp
System.Object MateEntity( 
   System.Int32
NIndex
) {get;}
```
## Parameters

- `NIndex` (System.Int32): 0-based index associated with this entity

## Return Value

Face or reference plane

## Remarks

To get the type of entity returned by this method, call
IMateInPlace::MateEntityType
.