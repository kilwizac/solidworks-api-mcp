---
type: property
interface: IMate2
member: LockMagneticMate
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related: []
keywords:
  - mates
  - see
  - also
  - imate2
  - magnetic
  - lockmagneticmate
  - mate2
  - lock
  - mate
  - boolean
readonly: null
---

# IMate2.LockMagneticMate

Gets or sets whether to lock this magnetic mate.

## Signature

```csharp
System.Boolean LockMagneticMate {get; set;}
```
## Parameters

None.

## Return Value

True to lock, false to not

## Remarks

This property is valid only if
IMate2::Type
is set to
swMateType_e
.swMateMAGNETIC.