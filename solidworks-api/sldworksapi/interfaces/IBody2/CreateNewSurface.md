---
type: method
interface: IBody2
member: CreateNewSurface
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.ICreateNewSurface
keywords:
  - surface
  - see
  - also
  - isurface
  - bodies
  - createnewsurface
  - ibody2
  - body2
  - create
  - new
  - object
---

# IBody2.CreateNewSurface

Creates a handle for a new surface to serve as geometry for a face to be added to the body.

## Signature

```csharp
System.Object CreateNewSurface()
```
## Parameters

None.

## Return Value

New surface

## Remarks

This method is the first in a set of related functions that construct a body from trimmed surfaces. Internally, this function also creates a list that SOLIDWORKS uses as a place-holder for trimming curves used to trim the surface to the desired shape.
Any existing object created by this method is destroyed if you call this method again.

## See Also

- `IBody2.ICreateNewSurface`