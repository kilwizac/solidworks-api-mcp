---
type: method
interface: IEnvironment
member: GetSymArcs2
returns: System.Object
parameters:
  -
    name: SymId
    type: System.String
    description: Name of the geometric tolerance symbol formatted as: < LibraryName-SymbolName > where LibraryName and SymbolName are in the SOLIDWORKS text file C:\ProgramData\SolidWorks\SolidWorks 20 nn \ lang \ english\gtol.sym . NOTE : You must include the right- and left-angle brackets and separate LibraryName and SymbolName with a hyphen; for example, <MOD-DEG>.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - arcs
  - geometric
  - tolerancing
  - getsymarcs2
  - ienvironment
  - environment
  - sym
  - arcs2
  - id
  - string
  - object
---

# IEnvironment.GetSymArcs2

Gets an array of information about all arcs in the specified geometric tolerance symbol.

## Signature

```csharp
System.Object GetSymArcs2( 
   System.String
SymId
)
```
## Parameters

- `SymId` (System.String): Name of the geometric tolerance symbol formatted as: < LibraryName-SymbolName > where LibraryName and SymbolName are in the SOLIDWORKS text file C:\ProgramData\SolidWorks\SolidWorks 20 nn \ lang \ english\gtol.sym . NOTE : You must include the right- and left-angle brackets and separate LibraryName and SymbolName with a hyphen; for example, <MOD-DEG>.

## Return Value

Array (see Remarks )

## Remarks

Each arc in the geometric tolerance symbol is defined by three points (center, arc start, and arc end), whether the arc is filled, and whether the chord joining the start and end points is drawn. The size of the array returned is based on the number of arcs within this geometric tolerance symbol. You can determine this number by calling
IEnvironment::GetSymEdgeCounts
.
The return value contains the following array for each arc:
[ x coordinate of center point,
y coordinate of center point,
z coordinate of center point,
x coordinate of start point,
y coordinate of start point,
z coordinate of start point,
x coordinate of end point,
y coordinate of end point,
z coordinate of end point,
whether arch is filled,
whether the chord joining the start and end points is drawn ]

## Examples

- IEnvironment (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IEnvironment)