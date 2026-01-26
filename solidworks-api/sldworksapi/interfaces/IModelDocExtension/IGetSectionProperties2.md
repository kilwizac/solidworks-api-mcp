---
type: method
interface: IModelDocExtension
member: IGetSectionProperties2
returns: System.Double
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of sections
  -
    name: Sections
    type: System.Object
    description: Array of sections
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.GetSectionProperties2
keywords:
  - mass
  - properties
  - see
  - imassproperty
  - section
  - igetsectionproperties2
  - imodeldocextension
  - model
  - doc
  - extension
  - properties2
  - count
  - int32
  - sections
  - object
  - double
---

# IModelDocExtension.IGetSectionProperties2

Gets the section properties for the following types of selected items:

## Signature

```csharp
System.Double IGetSectionProperties2( 
   System.Int32
Count
,
   ref System.Object
Sections
)
```
## Parameters

- `Count` (System.Int32): Number of sections
- `Sections` (System.Object): Array of sections

## Return Value

in-process, unmanaged C++: Pointer to an array of size 24 of the section properties for the selected items (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

This method clears the selection set.
If...
Then...
The user selected a set of either parallel planes or parallel faces
You can pass an empty sections array
The user selected any items and you pass a sections array
The properties of the user-selected items and the sections array are combined in the returned array
You pass a sections array and you do not want this array combined with the properties of any user-selected items
Clear any user-selected items
The objects in the Sections parameter are added to the current selection set. If the objects are already in the current selection set, an error is generated; that is, status code will be equal to 1, which means invalid input.
The format of the returned array (retval) of size 24:
retval[0]
status of request:
0 = success
1 = invalid input
2 = selected faces are not in the same or parallel planes
3 = unable to compute section properties
retval[1]
area
retval[2]
centroid x
retval[3]
centroid y
retval[4]
centroid z
retval[5]
moment of inertia XX
reval[6]
moment of inertia YY
retval[7]
moment of inertia ZZ
retval[8]
moment of inertia -XY
retval[9]
moment of inertia -ZX
retval[10]
moment of inertia -YZ
retval[11]
polar moment of inertia of an area at the centroid
retval[12]
angle between principal axis and part axis
retval[13]
principal moment of inertia of an area at the centroid, lx
retval[14]
principal moment of inertia of an area at the centroid, ly
retval[15]
direction vector X for principle axes (x component)
retval[16]
direction vector X for principle axes (y component)
retval[17]
direction vector X for principle axes (z component)
retval[18]
direction vector Y for principle axes (x component)
retval[19]
direction vector Y for principle axes (y component)
retval[20]
direction vector Y for principle axes (z component)
retval[21]
direction vector Z for principle axes (x component)
retval[22]
direction vector Z for principle axes (y component)
retval[23]
direction vector Z for principle axes (z component)
This method returns metric units unless explicitly specified otherwise.

## See Also

- `IModelDocExtension.GetSectionProperties2`