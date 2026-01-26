---
type: method
interface: IBody2
member: ISectionBySheet
returns: System.Int32
parameters:
  -
    name: Sheet
    type: Body2
    description: Pointer to the sheet body used to perform the section
  -
    name: NumMaxSections
    type: System.Int32
    description: Maximum number of sections to create
  -
    name: SectionedBodies
    type: Body2
    description: Pointer to an array of bodies created during the section operation
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - sheet
  - bodies
  - isectionbysheet
  - ibody2
  - body2
  - section
  - num
  - max
  - sections
  - int32
  - sectioned
---

# IBody2.ISectionBySheet

Sections a body using a sheet (surface) body.

## Signature

```csharp
System.Int32 ISectionBySheet( 
   Body2
Sheet
,
   System.Int32
NumMaxSections
,
   ref Body2
SectionedBodies
)
```
## Parameters

- `Sheet` (Body2): Pointer to the sheet body used to perform the section
- `NumMaxSections` (System.Int32): Maximum number of sections to create
- `SectionedBodies` (Body2): Pointer to an array of bodies created during the section operation

## Return Value

Number of bodies created during the operation

## Remarks

Before using this method,
make a copy of the body
because the sheet body becomes invalid after using this method. COM applications should release all bodies after calling this method.