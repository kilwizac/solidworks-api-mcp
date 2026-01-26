---
type: method
interface: IEnvironment
member: GetSymEdgeCounts
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
  - geometry
related:
  - IEnvironment.GetSymArcs
  - IEnvironment.GetSymCircles
  - IEnvironment.GetSymLines
  - IEnvironment.GetSymText
  - IEnvironment.GetSymTextPoints
  - IEnvironment.IGetSymEdgeCounts
  - IEnvironment.IGetSymTriangles
keywords:
  - symbols
  - geometric
  - tolerancing
  - getsymedgecounts
  - ienvironment
  - environment
  - sym
  - edge
  - counts
  - id
  - string
  - object
---

# IEnvironment.GetSymEdgeCounts

Gets an array that contains the number of lines, arcs, circles, text strings, and triangles in the specified geometric tolerance symbol.

## Signature

```csharp
System.Object GetSymEdgeCounts( 
   System.String
SymId
)
```
## Parameters

- `SymId` (System.String): Name of the geometric tolerance symbol formatted as: < LibraryName-SymbolName > where LibraryName and SymbolName are in the SOLIDWORKS text file C:\ProgramData\SolidWorks\SolidWorks 20 nn \ lang \ english\gtol.sym . NOTE : You must include the right- and left-angle brackets and separate LibraryName and SymbolName with a hyphen; for example, <MOD-DEG>.

## Return Value

Array (see Remarks )

## Remarks

Format of return information is the following array of short integers:
retval[0] = line count
retval[1] = arc count
retval[2] = circle count
retval[3] = text count
retval[4] = triangle count

## Examples

- IEnvironment (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IEnvironment)

## See Also

- `IEnvironment.GetSymArcs`
- `IEnvironment.GetSymCircles`
- `IEnvironment.GetSymLines`
- `IEnvironment.GetSymText`
- `IEnvironment.GetSymTextPoints`
- `IEnvironment.IGetSymEdgeCounts`
- `IEnvironment.IGetSymTriangles`