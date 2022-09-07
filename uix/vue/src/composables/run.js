{
  "$schema": "http://json-schema.org/draft-07/schema",
  "title": "Experimental run",
  "$comment": "version: ga4gh-beacon-biosample-v2.0.0",
  "description": "Schema for the experimental run (e.g. sequencing run, array processing...) leading to the raw data for the (computational) analysis.",
  "type": "object",
  "properties": {
    "id": {
      "description": "Run ID.",
      "type": "string",
      "examples": ["SRR10903401"]
    },
    "biosampleId": {
      "description": "Reference to the biosample ID.",
      "type": "string",
      "examples": ["008dafdd-a3d1-4801-8c0a-8714e2b58e48"]
    },
    "individualId": {
      "description": "Reference to the individual ID.",
      "type": "string",
      "examples": ["TCGA-AO-A0JJ"]
    },
    "runDate": {
      "description": "Date at which the experiment was performed.",
      "type": "string",
      "format": "date",
      "examples": ["2021-10-18"]
    },
    "librarySource": {
      "description": "Ontology value for the source of the sequencing or hybridization library, e.g \"genomic source\", \"transcriptomic source\"",
      "$ref": "https://raw.githubusercontent.com/ga4gh-beacon/beacon-framework-v2/main/common/ontologyTerm.json",
      "examples": [
        { "id": "GENEPIO:0001966", "label": "genomic source" },
        { "id": "GENEPIO:0001965", "label": "metagenomic source" }
      ]
    },
    "librarySelection": {
      "description": "Selection method for library preparation, e.g \"RANDOM\", \"RT-PCR\"",
      "type": "string",
      "examples": ["RANDOM", "RT-PCR"]
    },
    "libraryStrategy": {
      "description": "Library strategy, e.g. \"WGS\"",
      "type": "string",
      "examples": ["WGS"]
    },
    "libraryLayout": {
      "description": "Ontology value for the library layout e.g \"PAIRED\", \"SINGLE\" #todo add Ontology name?",
      "type": "string",
      "enum": ["PAIRED", "SINGLE"]
    },
    "platform": {
      "description": "General platform technology label. It SHOULD be a subset of the platformModel and used only for query convenience, e.g. \"return everything sequenced with Illimuna\", where the specific model is not relevant",
      "type": "string",
      "examples": ["Illumina", "Oxford Nanopore", "Affymetrix"]
    },
    "platformModel": {
      "description": "Ontology value for experimental platform or methodology used. For sequencing platforms the use of \"OBI:0400103 - DNA sequencer\" is suggested.",
      "$ref": "https://raw.githubusercontent.com/ga4gh-beacon/beacon-framework-v2/main/common/ontologyTerm.json",
      "examples": [
        { "id": "OBI:0002048", "label": "Illumina HiSeq 3000" },
        { "id": "OBI:0002750", "label": "Oxford Nanopore MinION" },
        { "id": "EFO:0010938", "label": "large-insert clone DNA microarray" }
      ]
    },
    "info": {
      "$ref": "https://raw.githubusercontent.com/ga4gh-beacon/beacon-framework-v2/main/common/beaconCommonComponents.json#/definitions/Info"
    }
  },
  "required": ["id", "biosampleId", "runDate"],
  "additionalProperties": true
}
