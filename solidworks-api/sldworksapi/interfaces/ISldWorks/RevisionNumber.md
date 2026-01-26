---
type: method
interface: ISldWorks
member: RevisionNumber
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - Accessing SOLIDWORKS Add-in Objects
  - IModelDoc2.IVersionHistory
  - IModelDoc2.VersionHistory
  - ISldWorks.GetBuildNumbers2
  - ISldWorks.IVersionHistory
  - ISldWorks.VersionHistory
keywords:
  - version
  - number
  - solidworks
  - revisionnumber
  - isldworks
  - sld
  - works
  - revision
  - string
  - create
  - infinite
  - plane
  - vba
  - material
  - names
  - vb
  - net
---

# ISldWorks.RevisionNumber

Gets the version number of this SOLIDWORKS Design installation.

## Signature

```csharp
System.String RevisionNumber()
```
## Parameters

None.

## Return Value

SOLIDWORKS Design version number (See Remarks )

## Remarks

This method returns a string in the form "
major
.
minor
", where
major
is an integer (e.g., 1), and
minor
is a decimal number (e.g., 0.0).
For all SOLIDWORKS Design executables prior to the initial public release of SOLIDWORKS 2000, this method returns
1.0.0
(major = 1, minor = 0.0).
For the initial public release of SOLIDWORKS 2000, this method returns
8.0.0
(major = 8, minor = 0.0). For SOLIDWORKS 2000 SP1, this method returns
8.1.0
, and each successive service pack or service pack hot fix of SOLIDWORKS 2000 increments the minor decimal number (e.g., SP1.1 returns
8.1.1
, SP2 returns
8.2.0
, SP3 returns
8.3.0
, etc.).
For the inital public release of SOLIDWORKS 2005, this method returns
13.0.0
. For SOLIDWORKS 2005 SP0.1, it returns
13.0.1
. For SOLIDWORKS 2005 SP1, it returns
13.1.0
.
In general, each successive major public release increments the major number by one, each service pack increments the minor decimal number by 1.0, and each service pack hot fix increments the minor decimal number by 0.1. For the initial public release, the minor decimal number is always
0.0
.
Alpha, beta, and pre-release versions return negative minor decimal numbers:
a1:
-1.0
b1:
-2.0
b2:
-3.0
b3:
-4.0
PR1:
-5.0
(This value might be lower or higher depending on the number of beta releases.)
For SOLIDWORKS 2015 b2, this method returns
23.-3.0
.

## Examples

- Create Infinite Plane (VBA) (Create_Infinite_Plane_Example_VB.htm)
- Get Material Property Names (VBA) (Get_Material_Property_Names_Example_VB.htm)
- Get Version Number (C#) (Get_Version_Number_Example_CSharp.htm)
- Get Version Number (VB.NET) (Get_Version_Number_Example_VBNET.htm)
- Get Version Number (VBA) (Get_Version_Number_Example_VB.htm)

## See Also

- `Accessing SOLIDWORKS Add-in Objects`
- `IModelDoc2.IVersionHistory`
- `IModelDoc2.VersionHistory`
- `ISldWorks.GetBuildNumbers2`
- `ISldWorks.IVersionHistory`
- `ISldWorks.VersionHistory`