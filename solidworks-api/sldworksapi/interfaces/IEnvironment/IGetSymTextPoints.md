---
type: method
interface: IEnvironment
member: IGetSymTextPoints
returns: System.Double
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
  - symbols
  - geometric
  - tolerancing
  - igetsymtextpoints
  - ienvironment
  - environment
  - sym
  - text
  - points
  - id
  - string
  - double
---

# IEnvironment.IGetSymTextPoints

Gets an array that defines all text points in the specified geometric tolerance symbol.

## Signature

```csharp
System.Double IGetSymTextPoints( 
   System.String
SymId
)
```
## Parameters

- `SymId` (System.String): Name of the geometric tolerance symbol formatted as: < LibraryName-SymbolName > where LibraryName and SymbolName are in the SOLIDWORKS text file C:\ProgramData\SolidWorks\SolidWorks 20 nn \ lang \ english\gtol.sym . NOTE : You must include the right- and left-angle brackets and separate LibraryName and SymbolName with a hyphen; for example, <MOD-DEG>.

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

The size of the array returned is based on the number of text pieces within this geometric tolerance symbol. You can determine this number using the return value text count from
IEnvironment::IGetSymEdgeCounts
.
The return value is an array of doubles as follows:
retval[0] x coordinate of text 1
retval[1] y coordinate of text 1
retval[2] z coordinate of text 1
retval[3] x coordinate of text 2
retval[4] y coordinate of text 2
retval[5] z coordinate of text 2
retval[ (n*3-3)] X coordinate of text n
retval[ (n*3-2)] Y coordinate of text n
retval[ (n*3-1)] Z coordinate of text n