---
type: method
interface: IEnvironment
member: GetSymArcs
returns: System.Object
parameters:
  -
    name: SymId
    type: System.String
    description: Name of the geometric tolerance symbol formatted as: <LibraryName-SymbolName> where LibraryName and SymbolName are a pre-defined SOLIDWORKS symbol in the SOLIDWORKS text file gtol.sym , typically installed at C:\ProgramData\SolidWorks\SolidWorks 20 nn \ lang \ english . NOTE : You must include the right- and left-angle brackets and separate LibraryName and SymbolName with a hyphen; for example, <MOD-DEG>.
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
related:
  - IEnvironment.IGetSymArcs
keywords:
  - getsymarcs
  - ienvironment
  - environment
  - sym
  - arcs
  - id
  - string
  - object
---

# IEnvironment.GetSymArcs

Obsolete. Superseded by IEnvironment::GetSymArcs2.

## Signature

```csharp
System.Object GetSymArcs( 
   System.String
SymId
)
```
## Parameters

- `SymId` (System.String): Name of the geometric tolerance symbol formatted as: <LibraryName-SymbolName> where LibraryName and SymbolName are a pre-defined SOLIDWORKS symbol in the SOLIDWORKS text file gtol.sym , typically installed at C:\ProgramData\SolidWorks\SolidWorks 20 nn \ lang \ english . NOTE : You must include the right- and left-angle brackets and separate LibraryName and SymbolName with a hyphen; for example, <MOD-DEG>.

## Return Value

Array (see Remarks )

## Remarks

Each arc in the geometric tolerance symbol is defined by three points (center, arc start, and end). The size of the array returned is based on the number of arcs within this geometric tolerance symbol. You can determine this number using the return value arc count from
IEnvironment::GetSymEdgeCounts
.
The format of return value is the following array of doubles (in this example, for the
i
th arc):
retval[9 * i + 0] = x coordinate of center point
retval[9 * i + 1] = y coordinate of center point
retval[9 * i + 2] = z coordinate of center point
retval[9 * i + 3] = x coordinate of arc start point
retval[9 * i + 4] = y coordinate of arc start point
retval[9 * i + 5] = z coordinate of arc start point
retval[9 * i + 6] = x coordinate of arc end point
retval[9 * i + 7] = y coordinate of arc end point
retval[9 * i + 8] = z coordinate of arc end point

## See Also

- `IEnvironment.IGetSymArcs`