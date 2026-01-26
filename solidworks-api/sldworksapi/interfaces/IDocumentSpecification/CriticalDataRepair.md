---
type: property
interface: IDocumentSpecification
member: CriticalDataRepair
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - criticaldatarepair
  - idocumentspecification
  - document
  - specification
  - critical
  - data
  - repair
  - boolean
readonly: null
---

# IDocumentSpecification.CriticalDataRepair

Gets or sets whether to automatically repair critical data errors in the file to be opened.

## Signature

```csharp
System.Boolean CriticalDataRepair {get; set;}
```
## Parameters

None.

## Return Value

True to automatically repair critical data errors, false to not

## Remarks

This property is valid only if
IDocumentSpecification::Silent
is set to true.
If you set this property to true, and the file to open has critical data corruption:
Critical data repair proceeds.
ISldWorks::OpenDoc7
returns the document with warning,
swFileLoadWarning_e
.swFileLoadWarning_CriticalDataRepair.
All non-critical data errors are ignored, because repairing critical errors obliterates all non-critical data in the file.
If set to true, this property instructs SOLIDWORKS to repair critical data by importing Parasolid bodies into a new file. The repaired file contains only Parasolid bodies.
The following files are created in c
:\Users\
user
\AppData\Local\Temp:
Repaired_
file_name.sld*
Backup of
file_name.sld*
If you set this property to false, and the file to open has critical data corruption:
The document does not open.
ISldWorks::OpenDoc7 fails and returns null with error code,
swFileLoadError_e
.FileRequiresCriticalDataRepair.
Use
IDocumentSpecification::AutoRepair
to handle non-critical data corruption of files.
For C++ only, VARIANT_TRUE (-1) automatically repairs the file, and VARIANT_FALSE (0) does not.