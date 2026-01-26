---
type: method
interface: IModelDoc2
member: IVersionHistory
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
  - IModelDoc2.VersionHistory
  - IModelDocExtension.IsFutureVersion
  - ISldWorks.RevisionNumber
keywords:
  - version
  - number
  - solidworks
  - iversionhistory
  - imodeldoc2
  - model
  - doc2
  - history
  - string
  - document
---

# IModelDoc2.IVersionHistory

Gets an array of strings indicating the versions in which this model document was saved, including the SOLIDWORKS Design version in which the model document is currently opened and which is the last value returned in the array.

## Signature

```csharp
System.String IVersionHistory()
```
## Parameters

None.

## Return Value

Array of strings showing the history of the document

## Remarks

There is one array entry for each major release of the SOLIDWORKS Design software in which the document has been saved. The format for each entry is a major release code followed by one or more minor release codes separated by commas:
<major release code>[<minor release code>]
- or -
<major release code>[<minor release code>,<minor release code>...]
where <major release code> equals a number that remains constant through a major release of the SOLIDWORKS software. For example, the following values are returned based on the corresponding major SOLIDWORKS version:
SOLIDWORKS Release
Version Number
SOLIDWORKS 95
44
SOLIDWORKS 96
243
SOLIDWORKS 97
483
SOLIDWORKS 97Plus
629
SOLIDWORKS 98
822
SOLIDWORKS 98Plus
1008
SOLIDWORKS 99
1137
SOLIDWORKS 2000
1500
SOLIDWORKS 2001
1750
SOLIDWORKS 2001Plus
1950
SOLIDWORKS 2003
2200
SOLIDWORKS 2004
2500
SOLIDWORKS 2005
2800
SOLIDWORKS 2006
3100
SOLIDWORKS 2007
3400
SOLIDWORKS 2008
3800
SOLIDWORKS 2009
4100
SOLIDWORKS 2010
4400
SOLIDWORKS 2011
4700
SOLIDWORKS 2012
5000
SOLIDWORKS 2013
6000
SOLIDWORKS 2014
7000
SOLIDWORKS 2015
8000
SOLIDWORKS 2016
9000
SOLIDWORKS 2017
10000
SOLIDWORKS 2018
11000
SOLIDWORKS 2019
12000
SOLIDWORKS 2020
13000
SOLIDWORKS 2021
14000
SOLIDWORKS 2022
15000
SOLIDWORKS 2023
16000
SOLIDWORKS 2024
17000
SOLIDWORKS 2025
18000
SOLIDWORKS 2026
19000
The <minor release code> equals the year and day of manufacture of a saving version (for example, 1997/320).
Use
IModelDoc2::IGetVersionHistoryCount
before calling
this method to get the size of the array needed by this method.
To get the version in which a model document was last saved, use
ISldWorks::VersionHistory
.

## Examples

- Document Version History (C++) (Document_Version_History_Example_CPlusPlus_COM.htm)

## See Also

- `IModelDoc2.VersionHistory`
- `IModelDocExtension.IsFutureVersion`
- `ISldWorks.RevisionNumber`